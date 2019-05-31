import React from 'react'
// import logo from './logo.svg'
import './App.css'
import styled from 'styled-components'

import Editor from './Components/Editor'
import Content from './Components/Content'
import Preview from './Components/Preview'
import ActionIcons from './Components/ActionIcons'

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
