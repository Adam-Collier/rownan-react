import React from 'react'
import { useAppDispatch } from '../../context'
import { ReactComponent as CloseIcon } from '../../icons/close.svg'
import { convertEmojis } from '../../utils/emojiConvert'

import styled from 'styled-components'

const Block = styled.div`
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

function InfoStripBlock({ block, index }) {
  const { url, title } = block
  const dispatch = useAppDispatch()
  const handleChange = (index, e) => {
    if (e.target.name === 'title')
      e.target.value = convertEmojis(e.target.value)

    dispatch({
      type: 'addInfoStripContent',
      payload: e.target.value,
      name: e.target.name,
      index,
    })
  }

  return (
    <Block>
      <div>
        <input
          type="text"
          name="url"
          value={url.trim()}
          placeholder="url"
          onChange={(e) => handleChange(index, e)}
        />
        <input
          type="text"
          name="title"
          value={title}
          placeholder="title"
          onChange={(e) => handleChange(index, e)}
        />
      </div>
      <CloseIcon
        onClick={() => {
          dispatch({ type: 'removeInfoStrip', index })
          dispatch({ type: 'updateHTML' })
        }}
      />
    </Block>
  )
}

export default InfoStripBlock
