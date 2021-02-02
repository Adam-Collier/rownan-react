import React from 'react'

import { useAppState, useAppDispatch } from '../../../context/state-context'
import { IconContent, isFromFileCheck, getFileJSON } from '../index'

import { autoFillFromFileStatic } from '../autoFillFromFile'
import { autoFillFromSiteStatic } from '../autoFillFromSite'

export const AutoFillCategories = () => {
  const dispatch = useAppDispatch()
  const { territory } = useAppState()

  const handleClick = async (territory, e) => {
    if (isFromFileCheck(e)) {
      let savedJSON = await getFileJSON()

      let options = {
        dispatch,
        savedJSON,
        blockName: 'categories',
      }

      autoFillFromFileStatic(options)
    } else {
      let options = {
        dispatch,
        territory,
        blockName: 'categories',
        selector: '.category-tile__link',
      }

      autoFillFromSiteStatic(options)
    }
  }

  return (
    <IconContent>
      <select
        name="autofill"
        value="default"
        className="categories"
        onChange={(e) => handleClick(territory, e)}
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
