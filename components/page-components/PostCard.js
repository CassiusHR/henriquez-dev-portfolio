import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { hrefResolver } from '../../prismic-configuration'
import formatDate from '../../utils/formatDate'


const CardContainer = styled.div`
  width:calc(50% - 12px);
  margin:6px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:flex-start;
  padding:0px;
  transition:background 0.8s ease;
  margin-bottom:12px;
  margin-top:0px;
  border-radius:6px;
  min-height:150px;
  overflow:hidden;
  position:relative;
  border: 1px solid var(--ThemeButtonOutline);
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, var(--cardBackground1) 100%);
  transition:background 0.5s ease;
  z-index:0;
  :after{
    content:'';
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background-image: url(${props=>props.blurred});
    opacity:0.1;
    filter: grayscale(100%);
    z-index:1;
  }
  &.first{
    width:100%;
  }
  @media (max-width:1024px) {
    width:100%;
  }
  .text-content{
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    height:100%;
    padding:12px 12px 44px 12px;
    z-index:10;
    a{
      font-size:1.9rem;
      line-height:2rem;
      margin-bottom:6px;
      @media (max-width:1024px) {
        font-size:1.4rem;
        line-height:1.6rem;
      }
    }
    .date-container{
      display:flex;
      flex-direction:row;
      justify-content:flex-start;
      align-items:center;
      position:absolute;
      left:12px;
      bottom:12px;
      img{
        border-radius:50%;
        max-width:24px;
        margin-right:6px;
      }
      p{
        color: var(--text-color);
        font-size:11px;
        line-height:11px;
        margin:6px 0px;
        opacity:0.5;
        span{
          font-size:0.6rem;
          line-height:0.6rem;
          font-weight:400;
        }
      }
    }
    .tag-container{
      display:flex;
      flex-direction:row;
      justify-content:flex-start;
      align-items:center;
      span{
        color: var(--text-color);
        font-size:0.7rem;
        line-height:0.7rem;
        background:var(--background);
        transition:background 0.5s ease;
        font-weight:100;
        padding:3px 6px;
        border: 1px solid var(--ThemeButtonOutline);
        border-radius:6px;
        margin-right:6px;
        opacity:0.6;
      }
    }
  }
  .img-content{
    width:40%;
    position:relative;
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    align-items:center;
    height:150px;
    &:after{
      content: '';
      background-image: url(${props=>props.blurred});
      background-size: cover;
      background-repeat: no-repeat;
      width: 220px;
      height: 220px;
      display: block;
      position: absolute;
      bottom: 0px;
      left:-10px;
      z-index: 0;
      filter: blur(15px);
      opacity:0.6;
    }
    img{
      border-radius:20px 6px 6px 20px;
      z-index:1;
      width:100%;
      height:100%;
    }
  }
`

const PostCard = ({ post,index }) => {
  return (
      <CardContainer blurred={post.data.feature_image_small.url || post.data.feature_image.url} className={index === 0 ? 'first' : ''}>
          <div className="text-content">
          <Link href={hrefResolver(post)} scroll={false} passHref>
            <a>{post.data.title[0].text}</a>
          </Link>
            <div className="date-container">
              <img src="/post-avatar.jpg"/>
              <p>Carlos Henríquez - <span>{formatDate(post.first_publication_date)}</span></p>
            </div>
            <div className="tag-container">
              {post.tags.map((tag)=><span>{tag}</span>)}
            </div>
          </div>
          {/* <div className="img-content">
            <Image src={ post.data.feature_image_small.url || post.data.feature_image.url} layout="fill" objectFit='cover' className="cacuca"/>
          </div> */}
        </CardContainer>
  )
}

export default PostCard
