import React, { useRef } from 'react'
import styled from 'styled-components'

const path = window.require('path')
let basePath = window.require('electron').remote.app.getPath('temp')

const FrameWrapper = styled.div`
  position: absolute;
  background: white;
  width: 100%;
  overflow: hidden;
  height: 100vh;
  user-select: none;
`

const IFrame = styled.iframe`
  position: relative;
  top: 50%;
  left: 50%;
  width: 160%;
  transform: translate(-50%, -50%) scale(0.626);
  height: 160%;
  border: none;
  z-index: 2;
  -webkit-overflow-scrolling: touch;
`

const ContentPreview = (props) => {
  const iframeEl = useRef(null)

  return (
    <FrameWrapper>
      <IFrame
        ref={iframeEl}
        title="preview iframe"
        src={`file://${path.resolve(basePath)}/template/content-preview.html`}
      />
    </FrameWrapper>
  )
}

export default ContentPreview
