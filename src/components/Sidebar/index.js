import React from 'react'
import styled from 'styled-components'
import CodeEditor from './CodeEditor'
import Blocks from './Blocks'
import Resizeable from '../Resizeable'

const Container = styled.div`
  height: 100vh;
  background: #2e3235;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
`

const Sidebar = () => (
  <Container>
    <Resizeable directions={['bottom']} initialHeight={250}>
      <CodeEditor />
    </Resizeable>
    <Blocks />
  </Container>
)

export default Sidebar
