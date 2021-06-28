import React, { useEffect } from 'react'
import Head from 'next/head'
import { Client, manageLocal } from '../utils/prismicHelpers'
import { homepageToolbarDocs } from '../utils/prismicToolbarQueries'
import useUpdatePreviewRef from '../utils/hooks/useUpdatePreviewRef'
import useUpdateToolbarDocs from '../utils/hooks/useUpdateToolbarDocs'
import HeaderSection from '../components/common/HeaderSection'
import { motion } from 'framer-motion'
import ContentSection from '../components/common/ContentSection'
import Layout from '../components/Layout'
import AboutContent from '../components/page-components/AboutContent'
import Footer from '../components/common/Footer'

const about = ({doc, menu, lang, preview, switchTheme, theme}) => {

  return (
    <Layout switchTheme={switchTheme} theme={theme} menuLinks={menu.data.menu_links} altLangs={doc.alternate_languages} lang={lang}>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <Head>
          <title>Carlos Henriquez - About</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta property="og:title" content={`Henriquez.dev - ${doc.data.title[0].text}`} key="title" />
          <meta property="og:description" content={doc.data.description[0].text} key="description" />
          <meta name="description" content={doc.data.description[0].text} />
          <meta name="keywords" content="HTML, CSS, JavaScript, Web development, React, NextJS, Jamstack, Headless CMS" />
          <meta name="author" content="Carlos Henriquez" />
          <meta property="og:image" content={doc.data.header_image_small.url} key="page-image" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <link rel="icon" href="/favicon.png" type="image/png"/>
        </Head>
        <HeaderSection fullImg={doc.data.header_image_full.url} previewImg={doc.data.header_image_small.url} headerText={doc.data.title[0].text} headerDescription={doc.data.description[0].text}/>
        <ContentSection>
          <AboutContent textData={doc.data}/>
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
