import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const ContentWrapper = styled.div`
  width:100%;
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction:column;
  content-visibility: auto;
  .description-box{
    background: var(--cardBackground2);
    transition: background 0.5s ease;
    padding:6px 12px;
    border-radius: 0 0 6px 6px;
    p{
      margin:0;
      font-size:11px;
      line-height:11px;
    }
  }
`

const ImageWrapper = styled.div`
  width:100%;
  position:relative;
  display:flex;
  border-radius:6px;
  overflow:hidden;
  height:500px;
  border: 1px solid var(--ThemeButtonOutline);
  @media(max-width:1024px) {
    height:300px;
  }
`

const ImageSlice = ({slice}) => {
  return (
    <ContentWrapper>
      <ImageWrapper>
        <Image src={slice.primary.image.url} layout="fill" objectFit="cover"/>
      </ImageWrapper>
      <div className="description-box">
        <p>{slice.primary.image_description[0].text}</p>
      </div>
    </ContentWrapper>
  )
}

export default ImageSlice
