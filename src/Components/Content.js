import React from 'react'
import styled from 'styled-components'

const ContentContainer = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
`

const Content = props => {
  return <ContentContainer>This is the content window</ContentContainer>
}

export default Content
