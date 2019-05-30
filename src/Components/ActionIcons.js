import React from 'react'
import { ReactComponent as Switch } from '../icons/switch.svg'
import styled from 'styled-components'

import { useAppDispatch } from '../state-context'

const Icons = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  svg {
    width: 30px;
    fill: #a0a0a0;
  }
`

const ActionIcons = props => {
  const dispatch = useAppDispatch()
  return (
    <Icons>
      <Switch onClick={() => dispatch({ type: 'switch' })} />
    </Icons>
  )
}

export default ActionIcons