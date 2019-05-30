import React from 'react'
import { useAppState } from '../state-context'

const ContentPreview = props => {
  const { content } = useAppState()
  return (
    <div>
      <p>{`${content}`}</p>
    </div>
  )
}

export default ContentPreview
