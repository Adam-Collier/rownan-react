import React from 'react'
import { useAppDispatch } from '../../context/state-context'

import { ReactComponent as DragIcon } from '../../icons/dragIcon.svg'

import { AutoFillContent } from '../Autofill'
import HeroBlock from '../Hero/HeroBlock'
import LowerBlock from '../Lower/LowerBlock'

import { DropDown, Remove } from '../styles/ContentBlocks'

const DynamicBlock = ({ block, index }) => {
  const dispatch = useAppDispatch()

  let lowerInitial = {
    cta: '',
    image: '',
    subtitle: '',
    title: '',
    url: ''
  }

  let mainInitial = {
    image: '',
    mobile: '',
    primaryCta: '',
    primaryUrl: '',
    secondaryCta: '',
    secondaryUrl: '',
    subtitle: '',
    svg: '',
    title: ''
  }

  return (
    <>
      <DropDown>
        <select
          value={block.type}
          onChange={e => {
            dispatch({
              type: 'editDynamicBlock',
              payload: e.target.value,
              index,
              initial: e.target.value === 'main' ? mainInitial : lowerInitial
            })
            dispatch({ type: 'updateHTML' })
          }}
        >
          <option value="select">Please Select</option>
          <option value="main">Home Slider</option>
          <option value="lower">Three Slider</option>
        </select>
        <Remove
          onClick={() => {
            dispatch({ type: 'removeDynamicBlock', payload: index })
            dispatch({ type: 'updateHTML' })
          }}
        >
          Remove
        </Remove>
        <AutoFillContent index={index} type={block.type} />
        <DragIcon />
      </DropDown>
      {block.type === 'main' && <HeroBlock index={index} block={block} />}
      {block.type === 'lower' && <LowerBlock index={index} block={block} />}
    </>
  )
}

export default DynamicBlock
