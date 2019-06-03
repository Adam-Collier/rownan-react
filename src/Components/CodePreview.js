import React from 'react'
import Output from './Output'
import styled from 'styled-components'

import CodeMirror from 'codemirror'

import '../lib/CodeMirror/codemirror.css'
import 'codemirror/theme/solarized.css'

import 'codemirror/addon/runmode/runmode'
import 'codemirror/mode/meta'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/htmlmixed/htmlmixed'

import Highlight from './Highlight'

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

const CodePreview = props => {
  return (
    <CodeEditor className="CodeMirror">
      <Highlight
        value={Output()}
        language="htmlmixed"
        codeMirror={CodeMirror}
        theme="solarized"
      />
    </CodeEditor>
  )
}

export default CodePreview
