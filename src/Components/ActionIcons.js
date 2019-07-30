import React from 'react'
import { ReactComponent as Switch } from '../icons/switch.svg'
import { ReactComponent as Territories } from '../icons/territories.svg'
import styled from 'styled-components'
import { territoryTemplate } from '../lib/territoryTemplate'

import { useAppDispatch } from '../state-context'

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

const ActionIcons = props => {
  const dispatch = useAppDispatch()
  return (
    <Icons>
      <Territories onClick={() => territoryTemplate()} />
      <Switch onClick={() => dispatch({ type: 'switch' })} />
    </Icons>
  )
}

export default ActionIcons
