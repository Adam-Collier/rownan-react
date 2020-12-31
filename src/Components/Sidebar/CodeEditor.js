import React, { useEffect, useRef } from 'react'
import { useAppDispatch, useAppState } from '../../context/state-context'
import styled from 'styled-components'

import '../../lib/CodeMirror/codemirror.css'
import '../../lib/CodeMirror/one-dark.css'

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
`

function Editor(props) {
  const editor = useRef(null)
  const { editorCode } = useAppState()
  const dispatch = useAppDispatch()

  useEffect(() => {
    let options = {
      lineNumbers: false,
      mode: 'htmlmixed',
      theme: 'one-dark',
      autoCloseBrackets: true,
      autoCloseTags: true,
      tabSize: 1,
      keyMap: 'sublime'
    }

    let codeMirrorInstance = require('codemirror').fromTextArea(
      editor.current,
      options
    )

    codeMirrorInstance.on('change', instance => {
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
