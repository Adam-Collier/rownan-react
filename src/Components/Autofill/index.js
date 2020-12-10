import axios from 'axios'
import React from 'react'
import styled from 'styled-components'

import { useAppState, useAppDispatch } from '../../context/state-context'
import { placeholderImage } from '../../lib/placeholderImage'
import { convertEmojis } from '../../lib/emojiConvert'

import fillIcon from '../../icons/autoFill.svg'
import { ReactComponent as AutoFillIcon } from '../../icons/autoFill.svg'

const fs = window.require('fs-extra')
const { dialog } = window.require('electron').remote

const IconContent = styled.div`
  > select {
    appearance: none;
    background: url(${fillIcon});
    border: none;
    color: transparent;
    position: absolute;
    right: 32px;
    width: 26px;
    height: 26px;
    top: calc(46% - 7px);
    transform: translateY(-50%);
    cursor: pointer;
  }
  .categories {
    right: 0;
  }
`

let trimWhiteSpace = obj => {
  Object.keys(obj).forEach(key => {
    obj[key] = obj[key].trim()
  })
}

let removeTransformations = url => {
  if (url.includes('https://media.missguided.co.uk')) {
    let arr = url.split('/')

    if (arr[5].includes('w_')) {
      arr.splice(5, 1)
      return arr.join('/')
    }

    return arr.join('/')
  }
  if (
    url.includes('https://i1.adis.ws/i/missguided') ||
    url.includes('https://media.missguided.com/i/missguided')
  ) {
    return url.split('?')[0]
  }
}

let autoFillFromFile = (dispatch, index, value, type) => {
  dialog.showOpenDialog(
    { properties: ['openFile'], filters: [{ extensions: ['json'] }] },
    async function(files) {
      if (files) {
        let file = JSON.parse(fs.readFileSync(files[0], 'utf8'))

        if (type === 'main' || type === 'lower') {
          let contentBlocks = file.contentBlocks.filter(block => {
            return block.type === type
          })

          let blockIndex =
            type === 'main'
              ? parseInt(value.substring(3, 4)) - 1
              : value.substring(0, 1)

          if (!contentBlocks[blockIndex]) return

          let block = contentBlocks[blockIndex].content

          let imageArr =
            type === 'main' ? [block.image, block.mobile] : [block.image]

          imageArr.forEach((x, i) => {
            placeholderImage(x).then(placeholder => {
              dispatch({
                type: 'placeholderImage',
                name: i === 0 ? 'image' : 'mobile',
                index,
                payload: placeholder
              })
            })
          })
          dispatch({ type: 'autoFill', payload: block, index })
        } else if (type === 'categories') {
          dispatch({ type: 'autoFillCategories', payload: file.categories })
        }
      }
    }
  )
}

let createBlock = (el, type) => {
  if (type === 'lower') {
    let subtitle = el.querySelector('.subtitle3')
    let title = el.querySelector('.title3')

    return {
      cta: el.querySelector('button').textContent,
      image: removeTransformations(el.querySelector('img').dataset.src),
      subtitle: subtitle ? subtitle.textContent : '',
      title: title ? title.textContent : '',
      url: el.getAttribute('href')
    }
  } else if (type === 'main') {
    let srcSet = el.querySelector('source').dataset.srcset
    let urls = el.querySelectorAll('a')
    let buttons = el.querySelectorAll('button')
    let subtitle = el.querySelector('.subtitle1')
    let title = el.querySelector('.title1')

    return {
      image: removeTransformations(el.querySelector('img').dataset.src),
      mobile: removeTransformations(srcSet.match(/^https:[^ ]+/gi)[0]),
      primaryCta: buttons[0].textContent,
      primaryUrl: urls[0].getAttribute('href'),
      secondaryCta: buttons[1] ? buttons[1].textContent : '',
      secondaryUrl: urls[1] ? urls[1].getAttribute('href') : '',
      subtitle: subtitle ? subtitle.textContent : '',
      svg: el.querySelector('svg').outerHTML,
      title: title ? title.textContent : ''
    }
  }
}

let autoFillFromSite = async (
  dispatch,
  index,
  value,
  territory,
  type,
  selector
) => {
  if (value === 'default') return

  let { data } = await axios.get(territory.url)
  let parser = new DOMParser()
  let html = parser.parseFromString(data, 'text/html')

  let el =
    type === 'main'
      ? html.querySelector(`.${value}`)
      : html.querySelectorAll(selector)[value]

  if (el === null) return

  let block = createBlock(el, type)

  trimWhiteSpace(block)

  let imageArr = type === 'main' ? [block.image, block.mobile] : [block.image]

  imageArr.forEach((x, i) => {
    placeholderImage(x).then(placeholder => {
      dispatch({
        type: 'placeholderImage',
        name: i === 0 ? 'image' : 'mobile',
        index,
        payload: placeholder
      })
    })
  })
  dispatch({ type: 'autoFill', payload: block, index })
}

export const AutoFillContent = ({ index, type }) => {
  const { territory } = useAppState()
  let dispatch = useAppDispatch()

  let mainPopulate = async (territory, index, e) => {
    if (e.target.value === 'default') return

    if (e.target.value.includes('file')) {
      autoFillFromFile(dispatch, index, e.target.value, 'main')
    } else {
      autoFillFromSite(dispatch, index, e.target.value, territory, 'main')
    }
  }

  let lowerPopulate = async (territory, index, e) => {
    e.persist()

    if (e.target.value.includes('file')) {
      autoFillFromFile(dispatch, index, e.target.value, 'lower')
    } else {
      autoFillFromSite(
        dispatch,
        index,
        e.target.value,
        territory,
        'lower',
        '.slick-three > div > a'
      )
    }
  }

  return (
    <IconContent>
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
            <option value="row4">Row 4</option>
            <option value="row1 file">Row 1 (from file)</option>
            <option value="row2 file">Row 2 (from file)</option>
            <option value="row3 file">Row 3 (from file)</option>
            <option value="row4 file">Row 4 (from file)</option>
          </>
        )}
        {type === 'lower' && (
          <>
            <option value="default">No Lower</option>
            <option value="0">Lower 1</option>
            <option value="1">Lower 2</option>
            <option value="2">Lower 3</option>
            <option value="3">Lower 4</option>
            <option value="0 file">Lower 1 (from file)</option>
            <option value="1 file">Lower 2 (from file)</option>
            <option value="2 file">Lower 3 (from file)</option>
            <option value="3 file">Lower 4 (from file)</option>
          </>
        )}
      </select>
    </IconContent>
  )
}

const Icon = styled(AutoFillIcon)`
  width: 28px;
  height: 28px;
  cursor: pointer;
`

export const AutoFillCategories = () => {
  const dispatch = useAppDispatch()
  const { territory } = useAppState()

  const handleClick = async (territory, e) => {
    if (e.target.value.includes('file')) {
      autoFillFromFile(dispatch, null, e.target.value, 'categories')
    } else {
      let { data } = await axios.get(territory.url)
      let parser = new DOMParser()
      let html = parser.parseFromString(data, 'text/html')

      let categoryTiles = Array.from(
        html.querySelectorAll('.category-tile__link')
      )

      if (!categoryTiles.length) return

      let categoriesArr = []

      categoryTiles.forEach(category => {
        let image = removeTransformations(
          category.querySelector('.category-tile__image').dataset.src
        )
        let url = category.getAttribute('href')
        let title = category.querySelector('.category-tile__heading')
          .textContent

        categoriesArr.push({
          image,
          url,
          title
        })

        categoriesArr.forEach(x => {
          trimWhiteSpace(x)
        })

        dispatch({ type: 'autoFillCategories', payload: categoriesArr })
      })
    }
  }

  return (
    <IconContent>
      <select
        name="autofill"
        value="default"
        className="categories"
        onChange={e => handleClick(territory, e)}
      >
        <>
          <option value="default">No categories</option>
          <option value="0">From site</option>
          <option value="0 file">From file</option>
        </>
      </select>
    </IconContent>
  )
}

export const AutoFillPromos = props => {
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

      dispatch({ type: 'autoFillInfoStrip', payload: promosArr })
    })
  }

  return <Icon onClick={handleClick} />
}
