import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

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

function Frame(props) {
  const iframeEl = useRef(null)

  const renderFrameContent = () => {
    var doc = iframeEl.current.contentDocument
    console.log(doc)
    if (doc.readyState === 'complete') {
      ReactDOM.render(props.head, doc.head)
      ReactDOM.render([props.children, props.body], doc.body)
    } else {
      setTimeout(iframeEl.renderFrameContents, 0)
    }
  }

  useEffect(() => {
    renderFrameContent()
  })

  return <IFrame ref={iframeEl} title="preview iframe" />
}

export default Frame
