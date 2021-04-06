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

const about = ({posts, doc, menu, lang, preview, switchTheme, theme}) => {

  return (
    <Layout switchTheme={switchTheme} theme={theme} menuLinks={menu.data.menu_links} altLangs={doc.alternate_languages} lang={lang}>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <Head>
          <title>Carlos Henriquez - Blog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HeaderSection fullImg={doc.data.header_image_full.url} headerText={doc.data.title[0].text} headerDescription={doc.data.description[0].text}/>
        <ContentSection>
          {posts.map((post)=>(
            <PostCard post={post}/>
          ))}
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
