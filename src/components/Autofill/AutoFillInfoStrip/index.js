import React from 'react'
import styled from 'styled-components'

import { useAppState, useAppDispatch } from '../../../context'
import { ReactComponent as AutoFillIcon } from '../../../icons/autoFill.svg'

import { autoFillFromSiteStatic } from '../autoFillFromSite'

const Icon = styled(AutoFillIcon)`
  width: 28px;
  height: 28px;
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
