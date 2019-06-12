import React from 'react'
import { useAppState, useAppDispatch } from '../state-context'
import { ReactComponent as CloseIcon } from '../icons/close.svg'

import styled from 'styled-components'

const PromoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  input[type='text']:last-of-type {
    margin-bottom: 0px;
  }
  svg {
    width: 30px;
    padding: 10px 0px 10px 10px;
    cursor: pointer;
  }
`

function PromoBlocks() {
  const { promoBlocks } = useAppState()
  const dispatch = useAppDispatch()

  const handleChange = (index, e) => {
    dispatch({
      type: 'addPromoContent',
      payload: e.target.value,
      name: e.target.name,
      index
    })
    dispatch({ type: 'updateHTML' })
  }

  return (
    <>
      {promoBlocks.map((block, index) => (
        <PromoBlock key={index}>
          <div>
            <input
              type="text"
              name="url"
              value={block.url}
              placeholder="url"
              onChange={e => handleChange(index, e)}
            />
            <input
              type="text"
              name="title"
              value={block.title}
              placeholder="title"
              onChange={e => handleChange(index, e)}
            />
          </div>
          <CloseIcon
            onClick={() => dispatch({ type: 'removePromoBlock', index })}
          />
        </PromoBlock>
      ))}
    </>
  )
}

export default PromoBlocks
