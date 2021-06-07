import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import { Client, manageLocal } from '../utils/prismicHelpers'
import { homepageToolbarDocs } from '../utils/prismicToolbarQueries'
import useUpdatePreviewRef from '../utils/hooks/useUpdatePreviewRef'
import useUpdateToolbarDocs from '../utils/hooks/useUpdateToolbarDocs'
import HeaderSection from '../components/common/HeaderSection'
import { motion } from 'framer-motion'
import ContentSection from '../components/common/ContentSection'
import Layout from '../components/Layout'
import Footer from '../components/common/Footer'
import WorkContent from '../components/page-components/WorkContent'

const work = ({doc, menu, lang, preview, theme, switchTheme }) => {
  return (
    <Layout switchTheme={switchTheme} theme={theme} menuLinks={menu.data.menu_links} altLangs={doc.alternate_languages} lang={lang}>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <Head>
          <title>Carlos Henriquez - Work</title>
          <meta property="og:title" content={`Henriquez.dev - ${doc.data.title[0].text}`} key="title" />
          <meta property="og:description" content={doc.data.description[0].text} key="description" />
          <meta property="og:image" content={doc.data.small_image.url} key="page-image" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HeaderSection fullImg={doc.data.full_image.url} previewImg={doc.data.small_image.url} headerText={doc.data.title[0].text} headerDescription={doc.data.description[0].text}/>
        <ContentSection>
          <WorkContent/>
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

