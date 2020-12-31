import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { BlockWrapper, Block } from './styles/ContentBlocks'

const DragDrop = ({ id, stateItems, children }) => {
  let numberOfChildren = React.Children.count(children)
  return (
    <Droppable droppableId={id}>
      {provided => (
        <>
          <BlockWrapper ref={provided.innerRef} {...provided.droppableProps}>
            {numberOfChildren === 1 && children[0]}
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
                      {numberOfChildren === 1
                        ? children[1](stateItem, index)
                        : children(stateItem, index)}
                    </Block>
                  )}
                </Draggable>
              )
            })}
          </BlockWrapper>
          {provided.placeholder}
        </>
      )}
    </Droppable>
  )
}

export default DragDrop
