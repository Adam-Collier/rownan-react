import React, { memo } from 'react'
import styled from 'styled-components'

import { AutoFillPromos } from './AutoFill'
import { BlockWrapper } from './styles/ContentBlocks'
import PromoBlocks from './PromoBlocks'
import { useAppDispatch } from '../state-context'

const PromoButton = styled.input`
  background: none;
  color: #ffffff;
  font-size: 30px;
  border: none;
  padding: 0;
  width: 30px;
  cursor: pointer;
`

function PromoStrip() {
  const dispatch = useAppDispatch()

  return (
    <BlockWrapper>
      <section>
        <h3>Promo Strip</h3>
        <div>
          <AutoFillPromos />
          <PromoButton
            type="button"
            value="+"
            onClick={() => dispatch({ type: 'addPromoBlock' })}
          />
        </div>
      </section>
      <PromoBlocks />
    </BlockWrapper>
  )
}

export default memo(PromoStrip)
