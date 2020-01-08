import React, { memo } from 'react'
import styled from 'styled-components'
import { Draggable, Droppable } from 'react-beautiful-dnd'

import { AutoFillPromos } from './AutoFill'
import { BlockWrapper } from './styles/ContentBlocks'
import PromoBlock from './PromoBlock'
import { useAppDispatch, useAppState } from '../state-context'

const PromoButton = styled.input`
  background: none;
  color: #ffffff;
  font-size: 30px;
  border: none;
  padding: 0;
  width: 30px;
  cursor: pointer;
`

function PromoStrip() {
  const dispatch = useAppDispatch()
  const { promoBlocks } = useAppState()

  return (
    <Droppable droppableId="promos">
      {provided => (
        <BlockWrapper ref={provided.innerRef} {...provided.droppableProps}>
          <section>
            <h3>Promo Strip</h3>
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
                  ref={provided.innerRef}
                  {...provided.dragHandleProps}
                >
                  <PromoBlock provided={provided} block={block} />{' '}
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

export default memo(PromoStrip)
