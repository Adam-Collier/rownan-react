import React, { memo } from 'react'
import { useAppState } from '../state-context'
import styled from 'styled-components'

import ContentPreview from './ContentPreview'
import CodePreview from './CodePreview'

const PreviewPane = styled.div`
  position: relative;
  grid-column: 2/3;
  grid-row: 1/3;
  height: 100vh;
  background: #fff;
  overflow: scroll;
`

const Preview = props => {
  const { contentView } = useAppState()
  return (
    <PreviewPane>
      {contentView === true ? <ContentPreview /> : <CodePreview />}
    </PreviewPane>
  )
}

export default memo(Preview)
