import React from 'react'
import { ReactComponent as CodeIcon } from '../../icons/code.svg'
import { ReactComponent as EyeIcon } from '../../icons/eye.svg'
import EditorButton from '../EditorButton'
import CopyButton from '../CopyButton/index'
import { useAppDispatch, useAppState } from '../../context'

import styled from 'styled-components'

const Icons = styled.div`
  position: fixed;
  display: flex;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 2;

  > * + * {
    margin-left: 0.75rem;
  }

  svg {
    stroke: #a0a0a0;
    font-size: 0;
  }
`

const Icon = ({ Icon }) => {
  const dispatch = useAppDispatch()
  return <Icon size={24} onClick={() => dispatch({ type: 'switchView' })} />
}

const ActionIcons = () => {
  const { contentView, savedFilePath } = useAppState()

  console.log(savedFilePath)

  return (
    <Icons>
      {savedFilePath && <EditorButton path={savedFilePath} />}
      <CopyButton />
      {contentView ? <Icon Icon={CodeIcon} /> : <Icon Icon={EyeIcon} />}
    </Icons>
  )
}

export default ActionIcons
