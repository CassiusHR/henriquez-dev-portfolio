import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import { Client, manageLocal } from '../utils/prismicHelpers'
import { homepageToolbarDocs } from '../utils/prismicToolbarQueries'
import useUpdatePreviewRef from '../utils/hooks/useUpdatePreviewRef'
import useUpdateToolbarDocs from '../utils/hooks/useUpdateToolbarDocs'
import { GlobalContext } from '../context/GlobalContext'
import HeaderSection from '../components/common/HeaderSection'
import { motion } from 'framer-motion'

const about = ({doc, menu, lang, preview}) => {
  const {contextData,setContextData} = useContext(GlobalContext)

  useEffect(()=>{
    setContextData(menu)
  },[])

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <Head>
        <title>Carlos Henriquez - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderSection fullImg={doc.data.header_image_full.url} previewImg={doc.data.header_image_small.url} headerText={doc.data.title[0].text} headerDescription={doc.data.description[0].text}/>
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
