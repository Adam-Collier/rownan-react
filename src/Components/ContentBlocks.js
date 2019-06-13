import React from 'react'
import { useAppState, useAppDispatch } from '../state-context'
import styled from 'styled-components'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import chevron from '../icons/chevron.svg'
import { ReactComponent as DragIcon } from '../icons/dragIcon.svg'
import MainForm from './MainForm'
import LowerForm from './LowerForm'

const Block = styled.div`
  background: #2e3235;
`

const DropDown = styled.div`
  padding: 20px 20px 20px 20px;
  position: relative;
  -webkit-app-region: no-drag;

  &:nth-child(even) {
    background-color: #292d2f;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url(${chevron}) no-repeat 93% 48%;
    background-size: 16px 16px;
    color: #ffffff;
    border: none;
    border: 1px solid white;
    border-radius: 3px;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.6px;
    padding: 8px 35px 6px 16px;
    cursor: pointer;
  }

  .handle {
    width: 8px;
    position: absolute;
    right: 25px;
    top: 28px;
    -webkit-app-region: no-drag;
    cursor: -webkit-grab;
    padding: 0 10px;
  }
`

const Remove = styled.p`
  display: inline-block;
  cursor: pointer;
  font-size: 12px;
  color: #ffffff;
  text-decoration: none;
  padding-left: 15px;
  padding-top: 3px;
  font-weight: 400;
`

const ContentBlocks = props => {
  const dispatch = useAppDispatch()
  const { contentBlocks } = useAppState()

  let lowerInitial = {
    cta: '',
    image: '',
    subtitle: '',
    title: '',
    utl: ''
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
        <div ref={provided.innerRef} {...provided.droppableProps}>
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
        </div>
      )}
    </Droppable>
  )
}

export default ContentBlocks
