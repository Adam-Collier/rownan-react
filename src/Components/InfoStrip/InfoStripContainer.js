import React, { memo } from 'react'
import styled from 'styled-components'

import { AutoFillPromos } from '../Autofill'
import InfoStripBlock from './InfoStripBlock'
import { useAppDispatch, useAppState } from '../../state-context'
import DragDrop from '../DragDrop'

const PromoButton = styled.input`
  background: none;
  color: #ffffff;
  font-size: 30px;
  border: none;
  padding: 0;
  width: 30px;
  cursor: pointer;
`

function InfoStripContainer() {
  const dispatch = useAppDispatch()
  const { promoBlocks } = useAppState()

  return (
    <DragDrop id="promos" stateItems={promoBlocks}>
      <section>
        <h3>Info Strip</h3>
        <div>
          <AutoFillPromos />
          <PromoButton
            type="button"
            value="+"
            onClick={() => dispatch({ type: 'addPromoBlock' })}
          />
        </div>
      </section>
      {(block, index) => <InfoStripBlock block={block} index={index} />}
    </DragDrop>
  )
}

export default memo(InfoStripContainer)
