import React from 'react'
import EyeIcon from 'https://cdn.skypack.dev/react-feather/dist/icons/eye.js'
import CodeIcon from 'https://cdn.skypack.dev/react-feather/dist/icons/code.js'
import styled from 'styled-components'

import { useAppDispatch, useAppState } from '../../context/state-context'

const Icons = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 2;
  font-size: 0;


  .territories {
    position: relative;
    display: inline-block;
    margin-right: 20px;
    top: 3px;
  }
`

const Icon = ({ Icon }) => {
  const dispatch = useAppDispatch()
  return <Icon size={24} onClick={() => dispatch({ type: 'switchView' })} />
}



const ActionIcons = (props) => {  
  const { contentView } = useAppState()

  return (
    <Icons>
      {contentView ? <Icon Icon={CodeIcon} /> :  <Icon Icon={EyeIcon} />}
      {/* <Switch onClick={() => dispatch({ type: 'switchView' })} /> */}
    </Icons>
  )
}

export default ActionIcons
