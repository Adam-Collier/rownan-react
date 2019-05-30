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
  grid-template-rows: 350px 1fr;
`

function App() {
  return (
    <AppContainer className="App">
      <Editor />
      <Preview />
      <ActionIcons />
      <Content />
    </AppContainer>
  )
}

export default App
