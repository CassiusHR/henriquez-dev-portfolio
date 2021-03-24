import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import { Client, manageLocal } from '../utils/prismicHelpers'
import { homepageToolbarDocs } from '../utils/prismicToolbarQueries'
import useUpdatePreviewRef from '../utils/hooks/useUpdatePreviewRef'
import useUpdateToolbarDocs from '../utils/hooks/useUpdateToolbarDocs'
import { GlobalContext } from '../context/GlobalContext'
import HeaderSection from '../components/common/HeaderSection'
import { motion } from 'framer-motion'
import ContentSection from '../components/common/ContentSection'

const work = ({doc, menu, lang, preview}) => {
  const {contextData,setContextData} = useContext(GlobalContext)

  useEffect(()=>{
    setContextData({...contextData, pico:'ano'})
  },[])

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <Head>
        <title>Carlos Henriquez - Work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderSection fullImg={doc.data.full_image.url} previewImg={doc.data.small_image.url} headerText={doc.data.title[0].text} headerDescription={doc.data.description[0].text}/>
      <ContentSection>
        <h2>{contextData.pico}</h2>
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
    (await client.getSingle('work', ref ? { ref, lang: locale } : { lang: locale })) ||
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

export default work

