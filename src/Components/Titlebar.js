import React from 'react'
import styled from 'styled-components'

const remote = window.require('electron').remote

const TitlebarEl = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  -webkit-app-region: drag;
  z-index: 1000;
`

const handleDoubleClick = () => {
  const doubleClickAction = remote.systemPreferences.getUserDefault(
    'AppleActionOnDoubleClick',
    'string'
  )
  console.log(doubleClickAction)
  const win = remote.getCurrentWindow()
  if (doubleClickAction === 'Minimize') {
    win.minimize()
  } else if (doubleClickAction === 'Maximize') {
    if (!win.isMaximized()) {
      win.maximize()
    } else {
      console.log('this should be run')
      win.unmaximize()
    }
  }
}

const Titlebar = () => {
  return <TitlebarEl onDoubleClick={handleDoubleClick} />
}

export default Titlebar
