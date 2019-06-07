import React from 'react'
import styled from 'styled-components'
import { useAppDispatch } from '../state-context'
import ContentBlocks from './ContentBlocks'
import PromoStrip from './PromoStrip'

import { FormButton } from './styles/FormButton'

const ContentContainer = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
`

const Content = props => {
  const dispatch = useAppDispatch()

  return (
    <ContentContainer>
      <PromoStrip />
      <ContentBlocks />
      <FormButton
        type="button"
        value="+"
        onClick={() => dispatch({ type: 'addBlock', payload: 'select' })}
      />
    </ContentContainer>
  )
}

export default Content
