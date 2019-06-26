import React from 'react'
import { ReactComponent as AutoFillIcon } from '../icons/autoFill.svg'
import axios from 'axios'
import styled from 'styled-components'
import { useAppState, useAppDispatch } from '../state-context'

const Icon = styled(AutoFillIcon)`
  width: 28px;
  height: 28px;
  cursor: pointer;
`

const AutoFillCategories = props => {
  const dispatch = useAppDispatch()
  const { territory } = useAppState()
  const handleClick = async e => {
    e.persist()

    let { data } = await axios.get(territory.url)
    let parser = new DOMParser()
    let html = parser.parseFromString(data, 'text/html')

    let categoryTiles = Array.from(
      html.querySelectorAll('.category-tile__link')
    )

    console.log(categoryTiles)

    if (!categoryTiles.length) return

    let categoriesArr = []

    categoryTiles.forEach(category => {
      let image = category
        .querySelector('.category-tile__image')
        .dataset.src.slice(43)
      let url = category.getAttribute('href')
      let title = category.querySelector('.category-tile__heading').textContent

      categoriesArr.push({
        image,
        url,
        title
      })

      dispatch({ type: 'autoFillCategories', payload: categoriesArr })
    })
  }

  return <Icon onClick={handleClick} />
}

export default AutoFillCategories
