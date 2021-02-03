import React, { memo } from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppState } from '../../context/state-context'

import Categories from '../Categories/Categories'
import SaleCategories from '../SaleCategories/SaleCategories'
import DynamicBlocks from '../DynamicBlocks'
import InfoStripContainer from '../InfoStrip/InfoStripContainer'
import Territory from '../TerritorySelection'
import Ticker from '../Ticker/TickerBlock'

import { DragDropContext } from 'react-beautiful-dnd'
import { FormButton } from '../styles/FormButton'
import { AppDownloadBlock } from '../AppDownload'

const ContentContainer = styled.div`
  padding: 1rem;
  grid-column: 1/2;
  grid-row: 2/3;
`

const Content = (props) => {
  const dispatch = useAppDispatch()
  const {
    contentBlocks,
    categories,
    saleCategories,
    promoBlocks,
  } = useAppState()

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
      blockType,
    })

    dispatch({
      type: 'updateHTML',
    })
    return
  }

  return (
    <>
      <Territory />
      <ContentContainer>
        <Ticker />
        <DragDropContext onDragEnd={(e) => onDragEnd(e, promoBlocks)}>
          <InfoStripContainer />
        </DragDropContext>
        <DragDropContext onDragEnd={(e) => onDragEnd(e, categories)}>
          <Categories />
        </DragDropContext>
        <DragDropContext onDragEnd={(e) => onDragEnd(e, saleCategories)}>
          <SaleCategories />
        </DragDropContext>
        <AppDownloadBlock />
        <DragDropContext onDragEnd={(e) => onDragEnd(e, contentBlocks)}>
          <DynamicBlocks />
        </DragDropContext>
        <FormButton
          type="button"
          value="+"
          onClick={() =>
            dispatch({ type: 'addDynamicBlock', payload: 'select' })
          }
        />
      </ContentContainer>
    </>
  )
}

export default memo(Content)
