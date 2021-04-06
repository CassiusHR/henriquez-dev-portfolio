import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { hrefResolver } from '../../prismic-configuration'
import formatDate from '../../utils/formatDate'

const CardContainer = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:flex-start;
  padding:0px;
  background: var(--cardBackground1);
  transition:background 0.8s ease;
  margin-bottom:12px;
  border-radius:6px;
  height:150px;
  overflow:hidden;
  position:relative;
  border: 1px solid var(--ThemeButtonOutline);
  .text-content{
    width:60%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    height:100%;
    padding:24px;
    a{
      font-size:2rem;
      line-height:2.1rem;
      margin-bottom:12px;
    }
    .date-container{
      display:flex;
      flex-direction:row;
      justify-content:flex-start;
      align-items:center;
      position:absolute;
      left:24px;
      bottom:12px;
      img{
        border-radius:50%;
        max-width:24px;
        margin-right:6px;
      }
      p{
        color: var(--text-color);
        font-size:0.8rem;
        line-height:0.8rem;
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
        padding:5px 8px;
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

const PostCard = ({post}) => {
  return (
    
        <CardContainer blurred={post.data.feature_image.url}>
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
            {console.log(post)}
          </div>
          <div className="img-content">
            <Image src={post.data.feature_image.url} layout="fill" objectFit='cover' className="cacuca"/>
          </div>
        </CardContainer>
  )
}

export default PostCard
