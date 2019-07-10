import React from 'react'
import { useAppState, useAppDispatch } from '../state-context'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import { ReactComponent as DragIcon } from '../icons/dragIcon.svg'

import { AutoFillContent } from './AutoFill'
import MainForm from './MainForm'
import LowerForm from './LowerForm'

import { BlockWrapper, DropDown, Block, Remove } from './styles/ContentBlocks'

const ContentBlocks = props => {
  const dispatch = useAppDispatch()
  const { contentBlocks } = useAppState()

  let lowerInitial = {
    cta: '',
    image: '',
    subtitle: '',
    title: '',
    url: ''
  }

  let mainInitial = {
    image: '',
    mobile: '',
    primaryCta: '',
    primaryUrl: '',
    secondaryCta: '',
    secondaryUrl: '',
    subtitle: '',
    svg: '',
    title: ''
  }

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
                  <DropDown>
                    <select
                      value={block.type}
                      onChange={e => {
                        dispatch({
                          type: 'editBlock',
                          payload: e.target.value,
                          index,
                          initial:
                            e.target.value === 'main'
                              ? mainInitial
                              : lowerInitial
                        })
                        dispatch({ type: 'updateHTML' })
                      }}
                    >
                      <option value="select">Please Select</option>
                      <option value="main">Home Slider</option>
                      <option value="lower">Three Slider</option>
                    </select>
                    <Remove
                      onClick={() => {
                        dispatch({ type: 'removeBlock', payload: index })
                        dispatch({ type: 'updateHTML' })
                      }}
                    >
                      Remove
                    </Remove>
                    <AutoFillContent index={index} type={block.type} />
                    <DragIcon />
                  </DropDown>
                  {block.type === 'main' && (
                    <MainForm index={index} block={block} />
                  )}
                  {block.type === 'lower' && (
                    <LowerForm index={index} block={block} />
                  )}
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
