import React, { useEffect } from 'react'
import Head from 'next/head'
import { Client, manageLocal } from '../../utils/prismicHelpers'
import { homepageToolbarDocs } from '../../utils/prismicToolbarQueries'
import useUpdatePreviewRef from '../../utils/hooks/useUpdatePreviewRef'
import useUpdateToolbarDocs from '../../utils/hooks/useUpdateToolbarDocs'
import HeaderSection from '../../components/common/HeaderSection'
import { motion } from 'framer-motion'
import ContentSection from '../../components/common/ContentSection'
import Layout from '../../components/Layout'
import Footer from '../../components/common/Footer'
import SliceZone from '../../components/SliceZone'
import { queryRepeatableDocuments } from '../../utils/queries'

const post = ({post, menu, lang, preview, switchTheme, theme}) => {

  if (post && post.data) {
    return (
      <Layout switchTheme={switchTheme} theme={theme} menuLinks={menu.data.menu_links} altLangs={post.alternate_languages} lang={lang}>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
          <Head>
            <title>Carlos Henriquez - Blog</title>
          </Head>
          <HeaderSection fullImg={post.data.feature_image.url} previewImg="" headerText={post.data.title[0].text} headerDescription=""/>
          <ContentSection>
            {console.log(post.data)}
            <SliceZone slices={post.data.body}/>
          </ContentSection>
        </motion.div>
        <Footer/>
      </Layout>
    )
  }
  return null
}

export async function getStaticProps({ params, preview = null, previewData = {}, locale, locales }) {
  const { ref } = previewData
  const client = Client();
  const post = await client.getByUID("post", params.uid, ref ? { ref, lang: locale } : { lang: locale }) || {}
  const menu =
    (await client.getSingle('top_menu', ref ? { ref, lang: locale } : { lang: locale })) ||
    {};
  const { currentLang, isMyMainLanguage} = manageLocal(locales, locale)

  return {
    props: {
      preview,
      post,
      menu,
      lang:{
        currentLang,
        isMyMainLanguage,
      }
    }
  }
}

export async function getStaticPaths({ locales }) {
  const documents = await queryRepeatableDocuments((doc) => doc.type === 'post')
  return {
    paths: documents.map(doc => (
      {params:{uid:doc.uid, slug: `/blog/${doc.uid}`, locale: 'en-us'}},
      {params:{uid:doc.uid, slug: `/blog/${doc.uid}`, locale: 'es-cl'}}
    )),
    fallback: true,
  }
}

export default post
