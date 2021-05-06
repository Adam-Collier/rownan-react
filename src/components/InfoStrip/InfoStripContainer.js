import React, { memo } from 'react'
import styled from 'styled-components'

import InfoStripBlock from './InfoStripBlock'
import { useAppDispatch, useAppState } from '../../context'
import DragDrop from '../DragDrop'
import AutoFillStaticBlock from '../Autofill/AutoFillStaticBlock/index'
import { ReactComponent as PlusIcon } from '../../icons/plus.svg'

const PromoButton = styled.button`
  background: none;
  color: #ffffff;
  border: none;
  padding: 0;
  margin-left: 0.5rem;
  cursor: pointer;
  font-size: 0;

  svg {
    width: 20px;
    height: 20px;
  }
`

function InfoStripContainer() {
  const dispatch = useAppDispatch()
  const { promoBlocks } = useAppState()

  return (
    <DragDrop id="promos" stateItems={promoBlocks}>
      <section>
        <h3>Info Strip</h3>
        <div>
          <AutoFillStaticBlock blockName="promoBlocks" selector=".info" />
          <PromoButton
            type="button"
            value="+"
            onClick={() => dispatch({ type: 'addInfoStrip' })}
          >
            <PlusIcon />
          </PromoButton>
        </div>
      </section>
      {(block, index) => <InfoStripBlock block={block} index={index} />}
    </DragDrop>
  )
}

export default memo(InfoStripContainer)
