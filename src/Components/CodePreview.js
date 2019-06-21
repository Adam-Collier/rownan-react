import React, { memo } from 'react'
import { useAppState } from '../state-context'
import styled from 'styled-components'

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import { githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import html from 'react-syntax-highlighter/dist/esm/languages/hljs/htmlbars'

const CodeEditor = styled.div`
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
`

const CodePreview = () => {
  const { outputHTML } = useAppState()

  SyntaxHighlighter.registerLanguage('html', html)

  return (
    <CodeEditor className="CodeMirror">
      <SyntaxHighlighter language="html" style={githubGist}>
        {outputHTML}
      </SyntaxHighlighter>
    </CodeEditor>
  )
}

export default memo(CodePreview)
