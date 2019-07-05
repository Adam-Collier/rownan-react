import React, { memo } from 'react'
import styled from 'styled-components'

import { AutoFillPromos } from './AutoFill'
import { Form } from './styles/Form'
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

const PromoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function PromoStrip() {
  const dispatch = useAppDispatch()

  return (
    <Form>
      <PromoHeader>
        <h3>Promo Strip</h3>
        <div>
          <AutoFillPromos />
          <PromoButton
            type="button"
            value="+"
            onClick={() => dispatch({ type: 'addPromoBlock' })}
          />
        </div>
      </PromoHeader>
      <PromoBlocks />
    </Form>
  )
}

export default memo(PromoStrip)
