import { createDynamicBlock } from './index'
import axios from 'axios'

import { trimWhiteSpace, createStaticBlock } from './index'

export const autoFillFromSiteDynamic = async ({
  dispatch,
  index,
  territory,
  blockIndex,
  blockType,
  selector,
}) => {
  let { data } = await axios.get(territory.url)
  let parser = new DOMParser()
  let html = parser.parseFromString(data, 'text/html')

  let el = html.querySelectorAll(selector)[blockIndex]

  if (el === null) return

  let block = createDynamicBlock(el, blockType)

  if (blockType === 'hero' || blockType === 'lower') {
    trimWhiteSpace(block)
  }

  dispatch({ type: 'autoFill', payload: block, index })
}

export const autoFillFromSiteStatic = async ({
  dispatch,
  territory,
  blockName,
  selector,
}) => {
  let { data } = await axios.get(territory.url)
  let parser = new DOMParser()
  let html = parser.parseFromString(data, 'text/html')

  let allElements = Array.from(html.querySelectorAll(selector))

  if (!allElements.length) return

  let block = createStaticBlock(allElements, blockName)

  console.log(block)

  dispatch({
    type: 'autoFillBlock',
    payload: block,
    blockName,
  })
}
