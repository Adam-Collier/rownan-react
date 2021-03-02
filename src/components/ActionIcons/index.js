import React from 'react'
import { ReactComponent as Switch } from '../../icons/switch.svg'
import styled from 'styled-components'

import { useAppDispatch } from '../../context'

const Icons = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 2;
  svg {
    width: 30px;
    height: auto;
    fill: #a0a0a0;
  }
  .territories {
    position: relative;
    display: inline-block;
    margin-right: 20px;
    top: 3px;
  }
`

const ActionIcons = (props) => {
  const dispatch = useAppDispatch()
  return (
    <Icons>
      <Switch onClick={() => dispatch({ type: 'switchView' })} />
    </Icons>
  )
}

export default ActionIcons
