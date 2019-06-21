import React from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppState } from '../state-context'
import ContentBlocks from './ContentBlocks'
import PromoStrip from './PromoStrip'
import Categories from './Categories'

import { DragDropContext } from 'react-beautiful-dnd'

import { FormButton } from './styles/FormButton'

const ContentContainer = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
`

const Content = props => {
  const dispatch = useAppDispatch()
  const { contentBlocks } = useAppState()

  const onDragEnd = result => {
    const { destination, source } = result
    if (
      destination.droppableID === source.droppableID &&
      destination.index === source.index
    ) {
      return
    }

    const blocks = contentBlocks
    const [removed] = blocks.splice(source.index, 1)
    blocks.splice(destination.index, 0, removed)

    dispatch({
      type: 'reorderBlocks',
      reorderedBlocks: blocks
    })
    dispatch({
      type: 'updateHTML'
    })
    return
  }

  return (
    <ContentContainer>
      <PromoStrip />
      <Categories />
      <DragDropContext onDragEnd={onDragEnd}>
        <ContentBlocks />
      </DragDropContext>
      <FormButton
        type="button"
        value="+"
        onClick={() => dispatch({ type: 'addBlock', payload: 'select' })}
      />
    </ContentContainer>
  )
}

export default Content
