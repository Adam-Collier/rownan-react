import React from 'react'

import { useAppState, useAppDispatch } from '../../../context/state-context'
import { IconContent } from '../index'

import { isFromFileCheck, getFileJSON } from '../index'

import { autoFillFromFileDynamic } from '../autoFillFromFile'

import { autoFillFromSiteDynamic } from '../autoFillFromSite'

let getSelector = (type) => {
  switch (type) {
    case 'main':
      return '.row'
    case 'lower':
      return '.slick-three > div > a'
    case 'sale':
      return '.categories-sale__container'
    default:
      console.log('this type isnt handled')
  }
}

const AutoFillDynamicBlocks = ({ index, type }) => {
  const { territory } = useAppState()
  let dispatch = useAppDispatch()

  let selectSwitch = async (e, type) => {
    e.persist()

    if (e.target.value === 'default') return

    let blockIndex = e.target.value

    if (isFromFileCheck(e)) {
      let savedJSON = await getFileJSON()

      let filteredBlocks = savedJSON.contentBlocks.filter(
        (block) => block.type === type
      )

      let options = {
        dispatch,
        territory,
        index,
        blockIndex,
        filteredBlocks,
      }

      if (savedJSON) {
        autoFillFromFileDynamic(options)
      }
    } else {
      let selector = getSelector(type)

      let options = {
        dispatch,
        index,
        territory,
        blockIndex: e.target.value,
        blockType: type,
        selector,
      }

      autoFillFromSiteDynamic(options)
    }
  }

  return (
    <IconContent>
      <select
        name="autofill"
        value="default"
        onChange={(e) => selectSwitch(e, type)}
      >
        {type === 'main' && (
          <>
            <option value="default">No Row</option>
            <option value="0">Row 1</option>
            <option value="1">Row 2</option>
            <option value="2">Row 3</option>
            <option value="3">Row 4</option>
            <option data-file value="0">
              Row 1 (from file)
            </option>
            <option data-file value="1">
              Row 2 (from file)
            </option>
            <option data-file value="2">
              Row 3 (from file)
            </option>
            <option data-file value="3">
              Row 4 (from file)
            </option>
          </>
        )}
        {type === 'lower' && (
          <>
            <option value="default">No Lower</option>
            <option value="0">Lower 1</option>
            <option value="1">Lower 2</option>
            <option value="2">Lower 3</option>
            <option value="3">Lower 4</option>
            <option data-file value="0">
              Lower 1 (from file)
            </option>
            <option data-file value="1">
              Lower 2 (from file)
            </option>
            <option data-file value="2">
              Lower 3 (from file)
            </option>
            <option data-file value="3">
              Lower 4 (from file)
            </option>
          </>
        )}
        {type === 'sale' && (
          <>
            <option value="default">No Lower</option>
            <option value="0">CTA's 1</option>
            <option value="1">CTA's 2</option>
            <option data-file value="0">
              CTA's 1 (from file)
            </option>
            <option data-file value="1">
              CTA's 2 (from file)
            </option>
          </>
        )}
      </select>
    </IconContent>
  )
}

export default AutoFillDynamicBlocks
