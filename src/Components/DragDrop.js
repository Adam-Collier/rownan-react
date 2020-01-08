import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { BlockWrapper } from './styles/ContentBlocks'

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
                <div
                  key={index}
                  {...provided.draggableProps}
                  ref={provided.innerRef}
                  {...provided.dragHandleProps}
                >
                  {children}
                </div>
              )}
            </Draggable>
          )
        })}
      </BlockWrapper>
    )}
  </Droppable>
)

export default DragDrop
