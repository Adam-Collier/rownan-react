import React, { memo } from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppState } from '../state-context'

import Categories from './Categories/Categories'
import ContentBlocks from './ContentBlocks'
import InfoStripContainer from './InfoStrip/InfoStripContainer'
import Territory from "./TerritorySelection"
import Ticker from "./Ticker/TickerBlock"

import { DragDropContext } from 'react-beautiful-dnd'
import { FormButton } from './styles/FormButton'
import { AppDownloadBlock } from './AppDownload'

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
      <Territory />
      <Ticker />
      <DragDropContext onDragEnd={e => onDragEnd(e, promoBlocks)}>
        <InfoStripContainer />
      </DragDropContext>
      <DragDropContext onDragEnd={e => onDragEnd(e, categories)}>
        <Categories />
      </DragDropContext>
      <AppDownloadBlock />
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
