import React, { memo } from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppState } from '../state-context'

import Categories from './Categories'
import ContentBlocks from './ContentBlocks'
import PromoStrip from './PromoStrip'
import TerritorySelection from './TerritorySelection'

import { DragDropContext } from 'react-beautiful-dnd'
import { FormButton } from './styles/FormButton'

const ContentContainer = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
`

const Content = props => {
  const dispatch = useAppDispatch()
  const { contentBlocks, categories, promoBlocks } = useAppState()

  const onDragEnd = (result, blockType) => {
    const { destination, source } = result
    if (
      destination.droppableID === source.droppableID &&
      destination.index === source.index
    ) {
      return
    }

    const blocks = blockType
    const [removed] = blocks.splice(source.index, 1)
    blocks.splice(destination.index, 0, removed)

    dispatch({
      type: 'reorderBlocks',
      reorderedBlocks: blocks,
      blockType
    })
    dispatch({
      type: 'updateHTML'
    })
    return
  }

  return (
    <ContentContainer>
      <TerritorySelection />
      <DragDropContext onDragEnd={e => onDragEnd(e, promoBlocks)}>
        <PromoStrip />
      </DragDropContext>
      <DragDropContext onDragEnd={e => onDragEnd(e, categories)}>
        <Categories />
      </DragDropContext>
      <DragDropContext onDragEnd={e => onDragEnd(e, contentBlocks)}>
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

export default memo(Content)
