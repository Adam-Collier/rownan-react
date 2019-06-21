import React from 'react'
// import logo from './logo.svg'
import './App.css'
import styled from 'styled-components'
import Editor from './Components/Editor'
import Content from './Components/Content'
import Preview from './Components/Preview'
import ActionIcons from './Components/ActionIcons'

import { useAppDispatch } from './state-context'

const ipcRenderer = window.require('electron').ipcRenderer
const { dialog } = window.require('electron').remote
const fs = window.require('fs')

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
`

const Left = styled.div`
  height: 100vh;
  background: #2e3235;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
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
      <Left>
        <Editor />
        <Content />
      </Left>
      <Preview />
      <ActionIcons />
    </AppContainer>
  )
}

export default App
