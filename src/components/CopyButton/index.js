import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useAppState, useAppDispatch } from '../../context'

const Button = styled.button`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 3;
  width: 160px;
  padding: 0.75rem 1rem;
  border-radius: 3px;
  background: var(--primary-white);
  outline: none;
  border: 1px solid #a0a0a0;
  cursor: pointer;
  font-size: 0.75rem;
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
    <Button onClick={copyToClipboard}>
      {copied ? 'Copied!' : 'Copy Code to clipboard'}
    </Button>
  )
}

export default CopyButton
