import React from 'react'
import styled from 'styled-components'
import CodeEditor from './CodeEditor'
// import Blocks from './Blocks'

const Container = styled.div`
  height: 100vh;
  background: #2e3235;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
`

const Sidebar = () => (
  <Container>
    <CodeEditor />
    {/* <Blocks /> */}
  </Container>
)

export default Sidebar
