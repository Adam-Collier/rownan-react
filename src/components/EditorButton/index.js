import React from 'react'
import { ReactComponent as FileIcon } from '../../icons/file-text.svg'

const { exec } = window.require('child_process')

let handleClick = (path) => {
  let folderPath = path.substring(0, path.lastIndexOf('/'))
  exec(`code -n "${folderPath}"`)
}

const EditorButton = ({ path }) => {
  return (
    <FileIcon className="editor-button" onClick={() => handleClick(path)} />
  )
}

export default EditorButton
