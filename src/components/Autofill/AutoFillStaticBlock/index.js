import React from 'react'

import { useAppState, useAppDispatch } from '../../../context'
import { IconContent, isFromFileCheck, getFileJSON } from '../index'

import { autoFillFromFileStatic } from '../autoFillFromFile'
import { autoFillFromSiteStatic } from '../autoFillFromSite'

export const AutoFillStaticBlock = ({ blockName, selector }) => {
  const dispatch = useAppDispatch()
  const { territory } = useAppState()

  const handleClick = async (territory, e) => {
    if (isFromFileCheck(e)) {
      let savedJSON = await getFileJSON()

      let options = {
        dispatch,
        savedJSON,
        blockName,
      }

      autoFillFromFileStatic(options)
    } else {
      let options = {
        dispatch,
        territory,
        blockName,
        selector,
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

export default AutoFillStaticBlock
