import React from 'react'
import { useAppState, useAppDispatch } from '../../context'
import AutoFillStaticBlock from '../Autofill/AutoFillStaticBlock/index'
import { BlockWrapper } from '../_styled/ContentBlocks'

const TickerBlock = () => {
  const { tickerText } = useAppState()
  const dispatch = useAppDispatch()

  const handleChange = (e) => {
    dispatch({
      type: 'ticker',
      payload: e.target.value,
    })
  }

  return (
    <BlockWrapper>
      <section>
        <h3>Ticker</h3>
        <AutoFillStaticBlock blockName="tickerText" selector=".promo-ticker" />
      </section>
      <div>
        <label htmlFor="tickerText">Text</label>
        <input
          type="text"
          name="tickerText"
          value={tickerText}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </BlockWrapper>
  )
}

export default TickerBlock
