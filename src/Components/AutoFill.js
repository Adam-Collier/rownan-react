import React from 'react'
import fillIcon from '../icons/autoFill.svg'
import axios from 'axios'

import styled from 'styled-components'
import { useAppState, useAppDispatch } from '../state-context'

import { placeholderImage } from '../lib/placeholderImage'

const Icon = styled.div`
  > select {
    appearance: none;
    background: url(${fillIcon});
    border: none;
    color: transparent;
    position: absolute;
    right: 60px;
    width: 28px;
    height: 28px;
    top: 48%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`

const AutoFill = ({ index, type }) => {
  const { territory } = useAppState()
  let dispatch = useAppDispatch()

  let mainPopulate = async (territory, index, e) => {
    if (e.target.value === 'default') return

    let rowName = `.${e.target.value}`
    let { data } = await axios.get(territory.url)

    let parser = new DOMParser()
    let html = parser.parseFromString(data, 'text/html')

    let row = html.querySelector(rowName)

    if (row === null) return

    let srcSet = row.querySelector('source').dataset.srcset

    let mobileImage = srcSet.match(/^https:[^ ]+/gi)[0].slice(64)
    let image = row.querySelector('img').dataset.src.slice(55)
    let urls = row.querySelectorAll('a')
    let buttons = row.querySelectorAll('button')

    let subtitle = row.querySelector('.subtitle1')
    let title = row.querySelector('.title1')

    let block = {
      image: image,
      mobile: mobileImage,
      primaryCta: buttons[0].textContent,
      primaryUrl: urls[0].getAttribute('href'),
      secondaryCta: buttons[1] ? buttons[1].textContent : '',
      secondaryUrl: urls[1] ? urls[1].getAttribute('href') : '',
      subtitle: subtitle ? subtitle.textContent : '',
      svg: row.querySelector('svg').outerHTML,
      title: title ? title.textContent : ''
    }

    dispatch({ type: 'autoFill', payload: block, index })
    ;[image, mobileImage].forEach((x, i) => {
      placeholderImage(x).then(placeholder => {
        dispatch({
          type: 'placeholderImage',
          name: i === 0 ? 'image' : 'mobile',
          index,
          payload: placeholder
        })
      })
    })

    dispatch({ type: 'updateHTML' })
  }

  let lowerPopulate = async (territory, index, e) => {
    e.persist()

    let lowerValue = e.target.value

    if (e.target.value === 'default') return

    let { data } = await axios.get(territory.url)

    let parser = new DOMParser()
    let html = parser.parseFromString(data, 'text/html')

    let lowerSlot = html.querySelectorAll('.slick-three > div > a')[lowerValue]

    if (lowerSlot === null) return

    let subtitle = lowerSlot.querySelector('.subtitle3')
    let title = lowerSlot.querySelector('.title3')

    let block = {
      cta: lowerSlot.querySelector('button').textContent,
      image: lowerSlot.querySelector('img').dataset.src.slice(54),
      subtitle: subtitle ? subtitle.textContent : '',
      title: title ? title.textContent : '',
      url: lowerSlot.getAttribute('href')
    }

    dispatch({ type: 'autoFill', payload: block, index: index })
  }

  return (
    <Icon>
      <select
        name="autofill"
        value="default"
        onChange={e =>
          type === 'main'
            ? mainPopulate(territory, index, e)
            : lowerPopulate(territory, index, e)
        }
      >
        {type === 'main' && (
          <>
            <option value="default">No Row</option>
            <option value="row1">Row 1</option>
            <option value="row2">Row 2</option>
            <option value="row3">Row 3</option>
          </>
        )}
        {type === 'lower' && (
          <>
            <option value="default">No Lower</option>
            <option value="0">Lower 1</option>
            <option value="1">Lower 2</option>
            <option value="2">Lower 3</option>
            <option value="3">Lower 4</option>
          </>
        )}
      </select>
    </Icon>
  )
}

export default AutoFill
