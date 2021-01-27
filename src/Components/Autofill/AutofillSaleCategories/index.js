import React from 'react'
import { useAppState, useAppDispatch } from '../../../context/state-context'

import { IconContent } from '../index'
import { autoFillFromFileStatic } from '../autoFillFromFile'
import { autoFillFromSiteStatic } from '../autoFillFromSite'
import { isFromFileCheck, getFileJSON } from '../index'

const AutofillSaleCategories = () => {
  const dispatch = useAppDispatch()
  const { territory } = useAppState()

  const handleClick = async (territory, e) => {
    if (isFromFileCheck(e)) {
      let savedJSON = await getFileJSON()
      let options = {
        dispatch,
        savedJSON,
        blockName: 'saleCategories'
      }

      autoFillFromFileStatic(options)
    } else {
      e.persist()

      let options = {
        dispatch,
        territory,
        blockName: 'saleCategories',
        selector: '.categories-sale__grid a'
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

export default AutofillSaleCategories
