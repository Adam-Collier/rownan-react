import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { BlockWrapper, Block } from './styles/ContentBlocks'

const DragDrop = ({ id, stateItems, children }) => (
  <Droppable droppableId={id}>
    {provided => (
      <BlockWrapper ref={provided.innerRef} {...provided.droppableProps}>
        {stateItems.map((stateItem, index) => {
          return (
            <Draggable
              key={index}
              draggableId={`${id}${index + 1}`}
              index={index}
            >
              {provided => (
                <Block
                  key={index}
                  {...provided.draggableProps}
                  ref={provided.innerRef}
                  {...provided.dragHandleProps}
                >
                  {React.Children.map(children, child =>
                    React.cloneElement(child, { stateItem })
                  )}
                </Block>
              )}
            </Draggable>
          )
        })}
      </BlockWrapper>
    )}
  </Droppable>
)

export default DragDrop
