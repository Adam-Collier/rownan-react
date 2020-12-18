import React from 'react'
import axios from 'axios'
import { useAppState, useAppDispatch } from '../../../context/state-context'

import {
  removeTransformations,
  trimWhiteSpace,
  autoFillFromFile,
  IconContent
} from '../index'

const AutofillSaleCategories = () => {
  const dispatch = useAppDispatch()
  const { territory } = useAppState()

  const handleClick = async (territory, e) => {
    if (e.target.value.includes('file')) {
      autoFillFromFile(dispatch, null, e.target.value, 'saleCategories')
    } else {
      let { data } = await axios.get(territory.url)
      let parser = new DOMParser()
      let html = parser.parseFromString(data, 'text/html')

      let categoryTiles = Array.from(
        html.querySelectorAll('.categories-sale__grid a')
      )

      if (!categoryTiles.length) return

      let categoriesArr = []

      categoryTiles.forEach(category => {
        let image = removeTransformations(
          category.querySelector('.category-tile__image').dataset.src
        )
        let url = category.getAttribute('href')

        categoriesArr.push({
          image,
          url
        })

        categoriesArr.forEach(x => {
          trimWhiteSpace(x)
        })

        dispatch({
          type: 'autoFillBlock',
          payload: categoriesArr,
          blockName: 'saleCategories'
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
          <option value="0 file">From file</option>
        </>
      </select>
    </IconContent>
  )
}

export default AutofillSaleCategories
