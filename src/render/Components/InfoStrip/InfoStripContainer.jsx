import React, { memo } from 'react'
import styled from 'styled-components'

import { AutoFillInfoStrip } from '../Autofill/AutoFillInfoStrip'
import InfoStripBlock from './InfoStripBlock'
import { useAppDispatch, useAppState } from '../../context/state-context'
import DragDrop from '../DragDrop'

import PlusIcon from 'https://cdn.skypack.dev/react-feather/dist/icons/plus'

const PromoButton = styled.button`
  background: none;
  color: #ffffff;
  border: none;
  padding: 0;
  padding-left: 0.5rem;
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
          <AutoFillInfoStrip />
          <PromoButton
            type="button"
            // value=<PlusIcon}
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
