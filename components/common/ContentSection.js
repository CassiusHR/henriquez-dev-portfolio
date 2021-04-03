import React from 'react'
import styled from 'styled-components'
import ContentContainer from '../common/ContentContainer'
import bglogo from '../../public/bglogo.svg'

const SectionContainer = styled.section`
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  transform:translateY(-110px);
`

const ContentSection = ({children}) => {
  return (
    <SectionContainer>
      <ContentContainer>
        {children}
      </ContentContainer>
    </SectionContainer>
  )
}

export default ContentSection
