import React from 'react'
import styled from 'styled-components'
import { useAppState, useAppDispatch } from '../state-context'
import ContentBlocks from './ContentBlocks'

const ContentContainer = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
`

const Button = styled.input`
  width: calc(100% - 40px);
  height: 40px;
  background: white;
  border: none;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
  font-size: 16px;
  text-align: center;
  display: block;
  margin: 40px auto;
  margin-top: 20px;
  border-radius: 3px;
  cursor: pointer;
  &:focus {
    outline: none;
    cursor: pointer;
  }
`

const Content = props => {
  const dispatch = useAppDispatch()

  return (
    <ContentContainer>
      <ContentBlocks />
      <Button
        type="button"
        value="+"
        onClick={() => dispatch({ type: 'addBlock', payload: 'select' })}
      />
    </ContentContainer>
  )
}

export default Content
