import React, { useEffect } from 'react'
import Head from 'next/head'
import Prismic from '@prismicio/client'
import { Client, manageLocal } from '../utils/prismicHelpers'
import { homepageToolbarDocs } from '../utils/prismicToolbarQueries'
import useUpdatePreviewRef from '../utils/hooks/useUpdatePreviewRef'
import useUpdateToolbarDocs from '../utils/hooks/useUpdateToolbarDocs'
import HeaderSection from '../components/common/HeaderSection'
import { motion } from 'framer-motion'
import ContentSection from '../components/common/ContentSection'
import Layout from '../components/Layout'
import Footer from '../components/common/Footer'
import PostCard from '../components/page-components/PostCard'
import styled from 'styled-components'
import SeoMetaTag from '../utils/meta-tags'

const CardsContainer = styled.div`
  width:100%;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  flex-flow: row wrap;
`

const about = ({posts, doc, menu, lang, preview, switchTheme, theme, routeString}) => {
  
  return (
    <Layout switchTheme={switchTheme} theme={theme} menuLinks={menu.data.menu_links} altLangs={doc.alternate_languages} lang={lang}>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <SeoMetaTag lang={lang} routeString={routeString} seoTitle={doc.data.title[0].text} seoDescription={doc.data.description[0].text} seoOgImage={doc.data.og_image.url}/>
        <HeaderSection fullImg={doc.data.header_image_full.url} headerText={doc.data.title[0].text} headerDescription={doc.data.description[0].text}/>
        <ContentSection>
          <CardsContainer>
            {posts.map((post,i)=>(
              <PostCard post={post} index={i} key={`postcard-${i}`}/>
            ))}
          </CardsContainer>
        </ContentSection>
      </motion.div>
      <Footer/>
    </Layout>
  )
}

export async function getStaticProps({
  preview, 
  previewData,
  locale,
  locales,
}) {
  const ref = previewData ? previewData.ref : null
  const isPreview = preview || false
  const client = Client();
  const doc =
    (await client.getSingle('blog', ref ? { ref, lang: locale } : { lang: locale })) ||
    {};
  const menu =
    (await client.getSingle('top_menu', ref ? { ref, lang: locale } : { lang: locale })) ||
    {};

  const posts = await client.query(
    Prismic.Predicates.at("document.type", "post"), {
      orderings: "[document.first_publication_date desc]",
      ...(ref ? { ref, lang: locale } : { lang: locale })
    },
  )

  const { currentLang, isMyMainLanguage} = manageLocal(locales, locale)

  return {
    props: {
      menu,
      posts: posts ? posts.results : [],
      doc,
      preview: {
        isActive: isPreview,
        activeRef: ref,
      },
      lang:{
        currentLang,
        isMyMainLanguage,
      }
    },
  };
}

export default about
