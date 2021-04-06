import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { hrefResolver } from '../../prismic-configuration'

const CardContainer = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:flex-start;
  padding:24px;
  background: var(--cardBackground1);
  transition:background 0.8s ease;
  margin-bottom:12px;
  border-radius:6px;
  min-height:170px;
  overflow:hidden;
  .text-content{
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    height:100%;
    a{
      font-size:2rem;
    }
  }
  .img-content{
    width:300px;
    height:100%;
    position:relative;
    &:after{
      content: '';
      background-image: url(${props=>props.blurred});
      background-size: cover;
      background-repeat: no-repeat;
      width: 280px;
      height: 180px;
      display: block;
      position: absolute;
      bottom: -15px;
      left:0;
      z-index: 0;
      filter: blur(15px);
      opacity:0.6;
    }
    img{
      border-radius:6px 20px 6px 20px;
      z-index:1;
      width:100%;
    }
  }
`

const PostCard = ({post}) => {
  return (
    <Link href={hrefResolver(post)} scroll={false} passHref>
      <a>
        <CardContainer blurred={post.data.feature_image.url}>
          <div className="text-content">
            {console.log(post)}
            <a>{post.data.title[0].text}</a>
            <p></p>
          </div>
          <div className="img-content">
            <Image src={post.data.feature_image.url} height={200} width={300} objectFit='cover' className="cacuca"/>
          </div>
        </CardContainer>
      </a>
    </Link>
  )
}

export default PostCard
