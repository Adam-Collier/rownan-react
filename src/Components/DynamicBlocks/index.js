import React from 'react'
import { useAppState } from '../../state-context'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import DynamicBlock from './Block'
import { BlockWrapper, Block } from '../styles/ContentBlocks'

const ContentBlocks = props => {
  const { contentBlocks } = useAppState()

  return (
    <Droppable droppableId="droppable">
      {provided => (
        <BlockWrapper ref={provided.innerRef} {...provided.droppableProps}>
          {contentBlocks.map((block, index) => (
            <Draggable
              key={index}
              draggableId={`item${index + 1}`}
              index={index}
            >
              {provided => (
                <Block
                  {...provided.draggableProps}
                  ref={provided.innerRef}
                  {...provided.dragHandleProps}
                >
                  <DynamicBlock block={block} index={index} />
                </Block>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </BlockWrapper>
      )}
    </Droppable>
  )
}

export default ContentBlocks
