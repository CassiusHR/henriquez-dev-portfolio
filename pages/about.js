import React, { useEffect } from 'react'
import Head from 'next/head'
import { Client, manageLocal } from '../utils/prismicHelpers'
import { homepageToolbarDocs } from '../utils/prismicToolbarQueries'
import useUpdatePreviewRef from '../utils/hooks/useUpdatePreviewRef'
import useUpdateToolbarDocs from '../utils/hooks/useUpdateToolbarDocs'
import HeaderSection from '../components/common/HeaderSection'
import { motion } from 'framer-motion'
import ContentSection from '../components/common/ContentSection'

const about = ({doc, menu, lang, preview, setMenuLinks}) => {
  useEffect(()=>{
    setMenuLinks(menu.data.menu_links)
  },[])

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <Head>
        <title>Carlos Henriquez - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderSection fullImg={doc.data.header_image_full.url} previewImg={doc.data.header_image_small.url} headerText={doc.data.title[0].text} headerDescription={doc.data.description[0].text}/>
      <ContentSection>
        <h2>The short</h2>
        <h2>The long</h2>
      </ContentSection>
    </motion.div>
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
    (await client.getSingle('about', ref ? { ref, lang: locale } : { lang: locale })) ||
    {};
  const menu =
    (await client.getSingle('top_menu', ref ? { ref, lang: locale } : { lang: locale })) ||
    {};

  const { currentLang, isMyMainLanguage} = manageLocal(locales, locale)

  return {
    props: {
      menu,
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
