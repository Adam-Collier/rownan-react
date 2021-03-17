import React from 'react'
import { useAppDispatch } from '../../context'

import AutoFillDynamicBlocks from '../Autofill/AutoFillDynamicBlocks'
import HeroBlock from '../Hero/HeroBlock'
import LowerBlock from '../Lower/LowerBlock'
import SaleContainer from '../Sale/SaleContainer'

import { DropDown, Remove } from '../_styled/ContentBlocks'

const DynamicBlock = ({ block, index }) => {
  const dispatch = useAppDispatch()

  let lowerInitial = {
    cta: '',
    image: '',
    subtitle: '',
    title: '',
    url: '',
  }

  let heroInitial = {
    image: '',
    mobile: '',
    primaryCta: '',
    primaryUrl: '',
    secondaryCta: '',
    secondaryUrl: '',
    subtitle: '',
    svg: '',
    title: '',
  }

  let saleInitial = {
    title: '',
    ctas: [],
  }

  let getInitial = (val) => {
    switch (val) {
      case 'hero':
        return heroInitial
      case 'lower':
        return lowerInitial
      case 'sale':
        return saleInitial
      default:
        return heroInitial
    }
  }

  return (
    <>
      <DropDown>
        <select
          value={block.type}
          onChange={(e) => {
            dispatch({
              type: 'editDynamicBlock',
              payload: e.target.value,
              index,
              initial: getInitial(e.target.value),
            })
            dispatch({ type: 'updateHTML' })
          }}
        >
          <option value="select">Please Select</option>
          <option value="hero">Hero Slot</option>
          <option value="lower">Lower Slot</option>
          <option value="sale">Sale</option>
        </select>
        <div>
          <Remove
            onClick={() => {
              dispatch({ type: 'removeDynamicBlock', payload: index })
              dispatch({ type: 'updateHTML' })
            }}
          >
            Remove
          </Remove>
          <AutoFillDynamicBlocks index={index} type={block.type} />
        </div>
      </DropDown>
      {block.type === 'hero' && <HeroBlock index={index} block={block} />}
      {block.type === 'lower' && <LowerBlock index={index} block={block} />}
      {block.type === 'sale' && <SaleContainer index={index} block={block} />}
    </>
  )
}

export default DynamicBlock
