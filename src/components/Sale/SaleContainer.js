import React from 'react'
import styled from 'styled-components'
import { BlockForm } from '../styles/ContentBlocks'
import { useAppDispatch } from '../../context'
import { DragDropContext } from 'react-beautiful-dnd'
import DragDrop from '../DragDrop'
import SaleBlock from './SaleBlock'

const SaleContainer = ({ block, index }) => {
  const dispatch = useAppDispatch()
  const { content } = block

  const AddCtaButton = styled.input`
    background: none;
    color: #ffffff;
    font-size: 30px;
    border: none;
    padding: 0;
    width: 30px;
    cursor: pointer;
    vertical-align: super;
  `

  const BlockSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `

  const onDragEnd = (result, blockType, index) => {
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
      type: 'reorderNestedBlocks',
      reorderedBlocks: blocks,
      blockType,
      index,
    })

    dispatch({
      type: 'updateHTML',
    })
    return
  }

  const handleChange = (e) => {
    dispatch({
      type: 'addDynamicBlockContent',
      payload: e.target.value,
      name: e.target.name,
      index,
    })
  }

  return (
    <BlockForm>
      <div>
        <label>Sale Title</label>
        <input
          type="text"
          name="title"
          value={content.title}
          className="primary-url"
          onChange={handleChange}
        />
      </div>

      <BlockSection>
        <h3>Sale CTA's</h3>
        <div>
          <AddCtaButton
            type="button"
            value="+"
            onClick={() => dispatch({ type: 'addSaleCta', index })}
          />
        </div>
      </BlockSection>

      <DragDropContext onDragEnd={(e) => onDragEnd(e, content.ctas, index)}>
        <DragDrop id="saleCtaBlocks" stateItems={content.ctas}>
          {(stateItem, i) => (
            <SaleBlock
              key={i}
              cta={stateItem}
              contentBlockIndex={index}
              index={i}
            />
          )}
        </DragDrop>
      </DragDropContext>
    </BlockForm>
  )
}

export default SaleContainer
