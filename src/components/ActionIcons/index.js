import React from 'react'
import { ReactComponent as CodeIcon } from '../../icons/code.svg'
import { ReactComponent as EyeIcon } from '../../icons/eye.svg'
import styled from 'styled-components'

import { useAppDispatch, useAppState } from '../../context'

const Icons = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 2;
  font-size: 0;

  svg {
    stroke: #a0a0a0;
  }
`

const Icon = ({ Icon }) => {
  const dispatch = useAppDispatch()
  return <Icon size={24} onClick={() => dispatch({ type: 'switchView' })} />
}

const ActionIcons = () => {
  const { contentView } = useAppState()

  return (
    <Icons>
      {contentView ? <Icon Icon={CodeIcon} /> : <Icon Icon={EyeIcon} />}
    </Icons>
  )
}

export default ActionIcons
