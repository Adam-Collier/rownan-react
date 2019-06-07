import React from 'react'
import PromoBlocks from './PromoBlocks'
import { useAppDispatch } from '../state-context'
import { Form } from './styles/Form'

import styled from 'styled-components'
import { FormButton } from './styles/FormButton'

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
        <h2>Promo Strip</h2>
        <PromoButton
          type="button"
          value="+"
          onClick={() => dispatch({ type: 'addPromoBlock' })}
        />
      </PromoHeader>
      <PromoBlocks />
    </Form>
  )
}

export default PromoStrip