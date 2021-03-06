import React from 'react'
import styled from 'styled-components'
import Sidebar from './components/Sidebar'
import Preview from './components/Preview'
import ActionIcons from './components/ActionIcons'
import Titlebar from './components/Titlebar'

import { useAppDispatch } from './context'

const ipcRenderer = window.require('electron').ipcRenderer
const { dialog } = window.require('electron').remote
const fs = window.require('fs')

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
`

function App() {
  const dispatch = useAppDispatch()

  ipcRenderer.on('generate', function () {
    console.log('generate')
  })
  ipcRenderer.on('images', function () {
    dispatch({ type: 'updateHTML' })
    dispatch({ type: 'updateContentPreview' })
  })
  ipcRenderer.on('save', function () {
    console.log('save')
    dispatch({ type: 'saveFile' })
  })
  ipcRenderer.on('saveAs', function () {
    console.log('Save As')
    dispatch({ type: 'saveAs' })
  })
  ipcRenderer.on('preview', function () {
    console.log('preview')
  })
  ipcRenderer.on('mobileView', function () {
    console.log('mobileView')
  })
  ipcRenderer.on('openFile', async function () {
    let result = await dialog.showOpenDialog({
      filters: [{ extensions: ['json'] }],
      properties: ['openFile'],
    })

    let { filePaths } = result

    if (filePaths) {
      let savedState = JSON.parse(fs.readFileSync(filePaths[0], 'utf8'))

      document
        .querySelector('.CodeMirror')
        .CodeMirror.setValue(savedState.editorCode)

      dispatch({
        type: 'openFile',
        savedState,
      })
      dispatch({
        type: 'updateHTML',
      })
    }
  })
  return (
    <AppContainer className="App">
      <Titlebar />
      <Sidebar />
      <Preview />
      <ActionIcons />
    </AppContainer>
  )
}

export default App
