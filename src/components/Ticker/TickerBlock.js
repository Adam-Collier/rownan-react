import React from 'react'
import { useAppState, useAppDispatch } from '../../context'
import AutoFillStaticBlock from '../Autofill/AutoFillStaticBlock/index'
import { BlockWrapper } from '../_styled/ContentBlocks'

const TickerBlock = () => {
  const { tickerText } = useAppState()
  const dispatch = useAppDispatch()

  const { link, duration, text } = tickerText

  const handleChange = (e) => {
    dispatch({
      type: 'ticker',
      name: e.target.name,
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
        <section className="inline">
          <div>
            <label htmlFor="link">Link</label>
            <input
              type="text"
              name="link"
              value={link}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor="duration">Duration</label>
            <input
              type="text"
              name="duration"
              value={duration}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </section>
        <label htmlFor="text">Text</label>
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </BlockWrapper>
  )
}

export default TickerBlock
