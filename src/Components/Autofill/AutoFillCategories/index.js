import axios from 'axios'
import React from 'react'

import { useAppState, useAppDispatch } from '../../../context/state-context'
import {
  trimWhiteSpace,
  removeTransformations,
  IconContent,
  isFromFileCheck,
  getFileJSON
} from '../index'

import { autoFillFromFileStatic } from '../autoFillFromFile'

export const AutoFillCategories = () => {
  const dispatch = useAppDispatch()
  const { territory } = useAppState()

  const handleClick = async (territory, e) => {
    if (isFromFileCheck(e)) {
      let savedJSON = await getFileJSON()

      let options = {
        dispatch,
        savedJSON,
        blockName: 'categories'
      }

      autoFillFromFileStatic(options)
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

        dispatch({
          type: 'autoFillBlock',
          payload: categoriesArr,
          blockName: 'categories'
        })
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
          <option data-file value="0">
            From file
          </option>
        </>
      </select>
    </IconContent>
  )
}

export default AutoFillCategories
