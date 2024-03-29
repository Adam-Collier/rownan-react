import React from 'react'
import styled from 'styled-components'
import Sidebar from './components/Sidebar'
import Preview from './components/Preview'
import ActionIcons from './components/ActionIcons'
import Titlebar from './components/Titlebar'

import { useAppDispatch } from './context'

import { createGlobalStyle } from 'styled-components'

const ipcRenderer = window.require('electron').ipcRenderer
const { dialog } = window.require('electron').remote
const fs = window.require('fs')

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
`

const GlobalStyle = createGlobalStyle`
  :root {
     --primary-black: #141414;
     --primary-white: #FFFFFF;
     --border-radius: 3px;
  }
`

function simulateMouseClick(element) {
  // https://stackoverflow.com/questions/40091000/simulate-click-event-on-react-element
  const mouseClickEvents = ['mousedown', 'click', 'mouseup']
  mouseClickEvents.forEach((mouseEventType) =>
    element.dispatchEvent(
      new MouseEvent(mouseEventType, {
        view: window,
        bubbles: true,
        cancelable: true,
        buttons: 1,
      })
    )
  )
}

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

  ipcRenderer.on('copy-code', function () {
    var element = document.querySelector('.copy-button')
    simulateMouseClick(element)
  })

  ipcRenderer.on('open-editor', function () {
    var element = document.querySelector('.editor-button')
    simulateMouseClick(element)
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
      <GlobalStyle />
      <Titlebar />
      <Sidebar />
      <Preview />
      <ActionIcons />
    </AppContainer>
  )
}

export default App
