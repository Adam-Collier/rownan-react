import React, { Component } from 'react'
import styled from 'styled-components'
import CodeMirror from 'codemirror'

import '../lib/CodeMirror/codemirror.css'
import '../lib/CodeMirror/prism.css'
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

export default class Editor extends Component {
  editor = React.createRef()

  state = {
    editorCode: ''
  }

  componentDidMount() {
    this.codemirror = CodeMirror.fromTextArea(this.editor.current, {
      lineNumbers: false,
      mode: 'htmlmixed',
      theme: 'one-dark',
      autoCloseBrackets: true,
      autoCloseTags: true,
      tabSize: 1,
      keyMap: 'sublime'
    })
    this.codemirror.on('change', instance => {
      let value = instance.getValue()
      this.setState({ editorCode: value })
    })
  }

  render() {
    return (
      <CodeEditor>
        <textarea
          ref={this.editor}
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
}
