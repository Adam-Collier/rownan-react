import React from 'react'
import { useAppState } from '../../state-context'
import styled from 'styled-components'

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import prism from '../../lib/Prism/theme'
import html from 'react-syntax-highlighter/dist/esm/languages/prism/markup'

const CodeEditor = styled.div`
  && {
    overflow: scroll;
    background-color: rgb(245, 242, 240);
    height: 100vh;
    code {
      font-family: 'Fira Mono';
      font-size: 14px;
    }
    pre {
      padding: 35px 25px 25px 25px;
      margin-top: 0;
    }
  }
`

const CodePreview = () => {
  const { outputHTML } = useAppState()

  SyntaxHighlighter.registerLanguage('html', html)

  return (
    <CodeEditor className="CodeMirror">
      <SyntaxHighlighter language="html" style={prism}>
        {outputHTML}
      </SyntaxHighlighter>
    </CodeEditor>
  )
}

export default CodePreview
