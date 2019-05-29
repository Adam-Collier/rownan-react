import React from 'react'
// import logo from './logo.svg'
import './App.css'
import styled from 'styled-components'

import Editor from './Components/Editor'

const AppContainer = styled.div`
    display: grid;
    grid-template-columns: 400px 1fr;
    grid-template-rows: 350px 1fr;
`

function App() {
    return (
        <AppContainer className="App">
            <Editor />
        </AppContainer>
    )
}

export default App
