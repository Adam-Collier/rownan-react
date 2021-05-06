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
    dispatch({ type: 'updateHTML' })
    dispatch({ type: 'updateContentPreview' })
  })

  ipcRenderer.on('save', function () {
    dispatch({ type: 'saveFile' })
  })

  ipcRenderer.on('saveAs', function () {
    dispatch({ type: 'saveAs' })
  })

  ipcRenderer.on('preview', function () {
    dispatch({ type: 'switchView' })
  })

  ipcRenderer.on('openFile', async function () {
    let result = await dialog.showOpenDialog({
      filters: [{ extensions: ['json'] }],
      properties: ['openFile'],
    })

    let { filePaths } = result

    if (filePaths.length === 0) return

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
