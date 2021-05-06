import React, { useState, useEffect } from 'react'
import { useAppState, useAppDispatch } from '../../context'
import { ReactComponent as CopyIcon } from '../../icons/copy.svg'

import styled from 'styled-components'

const Notification = styled.p`
  padding: 0.5rem 0.75rem;
  background: var(--primary-black);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--primary-white);
  border-radius: var(--border-radius);
  position: absolute;
  right: 0;
  bottom: 100%;

  opacity: ${(props) => (props.copied ? 1 : 0)};
  transform: ${(props) => (props.copied ? 'translateY(0)' : 'translateY(3px)')};
  transition: 0.2s all ease-in-out;

  &:after {
    --width: 10px;
    content: '';
    top: calc(100% - (var(--width) / 2) - 2px);
    display: block;
    position: absolute;
    right: var(--width);
    height: var(--width);
    width: var(--width);
    transform: rotate(45deg);
    border-radius: 3px;
    background: var(--primary-black);
  }
`

const Container = styled.div`
  position: relative;
`

const CopyButton = () => {
  const dispatch = useAppDispatch()
  const { outputHTML } = useAppState()

  const [copied, setCopied] = useState(false)

  const delay = (duration) =>
    new Promise((resolve) => setTimeout(resolve, duration))

  // utilise useEffect to make sure we dont get a stale outputHTML prop
  useEffect(() => {
    if (copied === true) {
      const el = document.createElement(`textarea`)
      el.value = outputHTML
      el.setAttribute(`readonly`, ``)
      el.style.position = `absolute`
      el.style.left = `-9999px`
      document.body.appendChild(el)
      el.select()
      document.execCommand(`copy`)
      document.body.removeChild(el)
      // This is just personal preference.
      // I prefer to not show the whole text area selected.
      let buttonTextChange = async () => {
        await delay(2000)
        setCopied(false)
      }
      buttonTextChange()
    }
  }, [copied, outputHTML])

  let copyToClipboard = async () => {
    await dispatch({ type: 'updateHTML' })
    setCopied(true)
  }

  return (
    <Container>
      <Notification copied={copied}>Copied!</Notification>
      <CopyIcon onClick={copyToClipboard} />
    </Container>
  )
}

export default CopyButton
