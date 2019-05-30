import React, { useEffect, useRef } from 'react'
import { useAppDispatch } from '../state-context'
import styled from 'styled-components'
import CodeMirror from 'codemirror'

import '../lib/CodeMirror/codemirror.css'
import '../lib/CodeMirror/one-dark.css'

import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/htmlmixed/htmlmixed'

import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/edit/closetag'
import 'codemirror/addon/search/searchcursor'
import 'codemirror/keymap/sublime'

const CodeEditor = styled.div`
  .CodeMirror {
    line-height: 1.4;
  }

  .cm-s-one-dark.CodeMirror,
  textarea {
    padding: 35px 25px 25px 25px;
    border-radius: 3px;
    background: #21252b;
  }

  .CodeMirror:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 30px;
    -webkit-app-region: drag;
  }
`

function Editor(props) {
  const editor = useRef(null)
  const dispatch = useAppDispatch()

  useEffect(() => {
    CodeMirror.fromTextArea(editor.current, {
      lineNumbers: false,
      mode: 'htmlmixed',
      theme: 'one-dark',
      autoCloseBrackets: true,
      autoCloseTags: true,
      tabSize: 1,
      keyMap: 'sublime'
    }).on('change', instance => {
      let value = instance.getValue()
      dispatch({ type: 'editorCode', payload: value })
    })

    dispatch({ type: 'editorCode', payload: editor.current.value })
  })

  return (
    <CodeEditor>
      <textarea
        ref={editor}
        defaultValue={`<style>
  .title1, .title3, .subtitle1, .subtitle3, .container .button{
    text-transform: none;
  }
  @media (min-width:768px){
    .row1 .title1,
    .row2 .title1,
    .row3 .title1{
      display: none;
    }
    .row .subtitle1{
      margin-top: 20px;
    }
  }
  @media (max-width: 767px){
    .row svg{
      display: none;
    }
  }
</style>`}
      />
    </CodeEditor>
  )
}

export default Editor
