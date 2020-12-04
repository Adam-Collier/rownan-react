import React from 'react'
import { useAppDispatch } from '../state-context'
import { ReactComponent as CloseIcon } from '../icons/close.svg'
import { convertEmojis } from '../lib/emojiConvert'

import styled from 'styled-components'

const PromoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  input[type='text'] {
    margin-bottom: 15px;
  }

  input[type='text']:last-of-type {
    margin-bottom: 10px;
  }

  svg {
    width: 30px;
    padding: 10px 0px 10px 20px;
    cursor: pointer;
  }
`

function PromoBlocks({ block, provided, index }) {
  const dispatch = useAppDispatch()

  const handleChange = (index, e) => {
    if (e.target.name === 'title')
      e.target.value = convertEmojis(e.target.value)

    dispatch({
      type: 'addPromoContent',
      payload: e.target.value,
      name: e.target.name,
      index
    })
  }

  return (
    <PromoBlock>
      <div>
        <input
          type="text"
          name="url"
          value={block.url.trim()}
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
        onClick={() => {
          dispatch({ type: 'removePromoBlock', index })
          dispatch({ type: 'updateHTML' })
        }}
      />
    </PromoBlock>
  )
}

export default PromoBlocks
