import React, { memo } from 'react'
import styled from 'styled-components'

import { AutoFillInfoStrip } from '../Autofill/AutoFillInfoStrip'
import InfoStripBlock from './InfoStripBlock'
import { useAppDispatch, useAppState } from '../../context/state-context'
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
          <AutoFillInfoStrip />
          <PromoButton
            type="button"
            value="+"
            onClick={() => dispatch({ type: 'addInfoStrip' })}
          />
        </div>
      </section>
      {(block, index) => <InfoStripBlock block={block} index={index} />}
    </DragDrop>
  )
}

export default memo(InfoStripContainer)
