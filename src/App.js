import React from 'react'
import './App.css'
import styled from 'styled-components'
import Sidebar from './Components/Sidebar'
import Preview from './Components/Preview/Preview'
import ActionIcons from './Components/ActionIcons'
import Titlebar from './Components/Titlebar'

import { useAppDispatch } from './context/state-context'

const ipcRenderer = window.require('electron').ipcRenderer
const { dialog } = window.require('electron').remote
const fs = window.require('fs')

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
`

function App() {
  const dispatch = useAppDispatch()

  ipcRenderer.on('generate', function() {
    console.log('generate')
  })
  ipcRenderer.on('images', function() {
    dispatch({ type: 'updateHTML' })
    dispatch({ type: 'updateContentPreview' })
  })
  ipcRenderer.on('save', function() {
    dispatch({ type: 'saveFile' })
  })
  ipcRenderer.on('preview', function() {
    console.log('preview')
  })
  ipcRenderer.on('mobileView', function() {
    console.log('mobileView')
  })
  ipcRenderer.on('openFile', function() {
    dialog.showOpenDialog({ filters: [{ extensions: ['json'] }] }, function(
      filePaths
    ) {
      if (filePaths) {
        let savedState = JSON.parse(fs.readFileSync(filePaths[0], 'utf8'))

        document
          .querySelector('.CodeMirror')
          .CodeMirror.setValue(savedState.editorCode)

        dispatch({
          type: 'openFile',
          savedState
        })
        dispatch({
          type: 'updateHTML'
        })
      }
    })
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
