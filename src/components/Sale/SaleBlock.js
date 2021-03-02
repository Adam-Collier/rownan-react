import React from 'react'
// import { BlockForm } from '../styles/ContentBlocks'
import { ReactComponent as CloseIcon } from '../../icons/close.svg'
import { useAppDispatch } from '../../context/state-context'

import styled from 'styled-components'

const Block = styled.div`
  width: 100%;
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

const SaleBlock = ({ cta, index, contentBlockIndex }) => {
  const { text, url } = cta
  const dispatch = useAppDispatch()

  const handleChange = (index, e) => {
    dispatch({
      type: 'addSaleCtaContent',
      payload: e.target.value,
      name: e.target.name,
      index,
      contentBlockIndex,
    })
  }

  return (
    <Block>
      <div>
        <input
          type="text"
          name="text"
          placeholder="text"
          value={text}
          onChange={(e) => handleChange(index, e)}
        />
        <input
          type="text"
          placeholder="url"
          name="url"
          value={url.trim()}
          onChange={(e) => handleChange(index, e)}
        />
      </div>
      <CloseIcon
        onClick={() => {
          dispatch({ type: 'removeSaleCta', index, contentBlockIndex })
          dispatch({ type: 'updateHTML' })
        }}
      />
    </Block>
  )
}

export default SaleBlock
