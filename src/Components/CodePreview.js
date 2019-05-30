import React from 'react'
import { useAppState } from '../state-context'

const CodePreview = props => {
  const { codePreview } = useAppState()
  return <div>{`${codePreview}`}</div>
}

export default CodePreview
