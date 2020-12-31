import React from 'react'
import { useAppState } from '../../context/state-context'
import DynamicBlock from './Block'

import DragDrop from '../DragDrop'

const ContentBlocks = props => {
  const { contentBlocks } = useAppState()

  return (
    <DragDrop id="dynamicBlocks" stateItems={contentBlocks}>
      {(stateItem, index) => <DynamicBlock block={stateItem} index={index} />}
    </DragDrop>
  )
}

export default ContentBlocks
