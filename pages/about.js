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
import SeoMetaTag from '../utils/meta-tags'

const about = ({doc, menu, lang, preview, switchTheme, theme, routeString}) => {

  return (
    <Layout switchTheme={switchTheme} theme={theme} menuLinks={menu.data.menu_links} altLangs={doc.alternate_languages} lang={lang}>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <SeoMetaTag lang={lang} routeString={routeString} seoTitle={doc.data.title[0].text} seoDescription={doc.data.description[0].text} seoOgImage={doc.data.og_image.url}/>
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
