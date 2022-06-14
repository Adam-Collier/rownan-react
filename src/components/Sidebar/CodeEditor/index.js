import React, { useEffect, useRef } from 'react'
import { useAppDispatch, useAppState } from '../../../context'
import styled from 'styled-components'

import './styles/codemirror.css'
import './styles/one-dark.css'

import 'codemirror/mode/css/css'

import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/edit/closetag'
import 'codemirror/addon/search/searchcursor'
import 'codemirror/keymap/sublime'
import 'codemirror/addon/display/placeholder.js'

const CodeEditor = styled.div`
  height: 100%;
  overflow: hidden;

  .CodeMirror {
    line-height: 1.4;
    height: 100%;
  }

  .cm-s-one-dark.CodeMirror,
  textarea {
    padding: 35px 25px 25px 25px;
    border-radius: 3px;
    background: #21252b;
  }
`

function Editor(props) {
  const editor = useRef(null)
  const { editorCode } = useAppState()
  const dispatch = useAppDispatch()

  useEffect(() => {
    let options = {
      lineNumbers: false,
      mode: 'css',
      theme: 'one-dark',
      autoCloseBrackets: true,
      autoCloseTags: true,
      tabSize: 1,
      keyMap: 'sublime',
    }

    let codeMirrorInstance = require('codemirror').fromTextArea(
      editor.current,
      options
    )

    codeMirrorInstance.on('change', (instance) => {
      let value = instance.getValue()
      dispatch({ type: 'editorCode', payload: value })
    })
    codeMirrorInstance.setValue(editorCode)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <CodeEditor>
      <textarea ref={editor} />
    </CodeEditor>
  )
}

export default Editor
