import axios from 'axios'
import React from 'react'
import styled from 'styled-components'

import { useAppState, useAppDispatch } from '../../../context/state-context'
import { convertEmojis } from '../../../lib/emojiConvert'
import { ReactComponent as AutoFillIcon } from '../../../icons/autoFill.svg'

import { trimWhiteSpace } from '../index'

const Icon = styled(AutoFillIcon)`
  width: 28px;
  height: 28px;
  cursor: pointer;
`

export const AutoFillInfoStrip = () => {
  const dispatch = useAppDispatch()
  const { territory } = useAppState()
  const handleClick = async e => {
    e.persist()

    let { data } = await axios.get(territory.url)
    let parser = new DOMParser()
    let html = parser.parseFromString(data, 'text/html')

    let promos = Array.from(html.querySelectorAll('.info'))

    if (!promos.length) return

    let promosArr = []

    promos.forEach(promo => {
      let url = promo.querySelector('a').getAttribute('href')
      let title = promo.querySelector('h3').innerHTML

      title = convertEmojis(title)

      promosArr.push({
        url,
        title
      })

      promosArr.forEach(x => {
        trimWhiteSpace(x)
      })

      dispatch({
        type: 'autoFillBlock',
        payload: promosArr,
        blockName: 'promoBlocks'
      })
    })
  }

  return <Icon onClick={handleClick} />
}
