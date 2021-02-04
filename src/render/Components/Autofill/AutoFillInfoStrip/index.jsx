import React from 'react'
import styled from 'styled-components'

import { useAppState, useAppDispatch } from '../../../context/state-context'
import AutoFillIcon from 'https://cdn.skypack.dev/react-feather/dist/icons/zap.js'

import { autoFillFromSiteStatic } from '../autoFillFromSite'

const Icon = styled(AutoFillIcon)`
  width: 18px;
  height: 18px;
  cursor: pointer;
`

export const AutoFillInfoStrip = () => {
  const dispatch = useAppDispatch()
  const { territory } = useAppState()
  const handleClick = async (e) => {
    e.persist()

    let options = {
      dispatch,
      territory,
      blockName: 'promoBlocks',
      selector: '.info',
    }

    autoFillFromSiteStatic(options)
  }

  return <Icon onClick={handleClick} />
}
