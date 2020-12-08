import React, { memo } from 'react'
import styled from 'styled-components'
import { Draggable, Droppable } from 'react-beautiful-dnd'

import { AutoFillPromos } from '../Autofill'
import { BlockWrapper } from '../styles/ContentBlocks'
import InfoStripBlock from './InfoStripBlock'
import { useAppDispatch, useAppState } from '../../state-context'

const PromoButton = styled.input`
  background: none;
  color: #ffffff;
  font-size: 30px;
  border: none;
  padding: 0;
  width: 30px;
  cursor: pointer;
`

function InfoStripContainer() {
  const dispatch = useAppDispatch()
  const { promoBlocks } = useAppState()

  return (
    <Droppable droppableId="promos">
      {provided => (
        <BlockWrapper ref={provided.innerRef} {...provided.droppableProps}>
          <section>
            <h3>Info Strip</h3>
            <div>
              <AutoFillPromos />
              <PromoButton
                type="button"
                value="+"
                onClick={() => dispatch({ type: 'addPromoBlock' })}
              />
            </div>
          </section>
          {promoBlocks.map((block, index) => (
            <Draggable
              key={index}
              draggableId={`promo${index + 1}`}
              index={index}
            >
              {provided => (
                <div
                  key={index}
                  {...provided.draggableProps}
                  ref={provided.ref}
                  {...provided.dragHandleProps}
                >
                  <InfoStripBlock
                    provided={provided}
                    block={block}
                    index={index}
                  />{' '}
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </BlockWrapper>
      )}
    </Droppable>
  )
}

export default memo(InfoStripContainer)
