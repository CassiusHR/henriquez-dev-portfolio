import React, { useEffect } from 'react'
import { Client, manageLocal } from '../utils/prismicHelpers'
import IndexHeader from '../components/page-components/IndexHeader'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import Footer from '../components/common/Footer'
import SeoMetaTag from '../utils/meta-tags'

const Home = ({doc, menu, lang, preview, setMenuLinks, theme, switchTheme, routeString}) =>{
  return (
    <Layout switchTheme={switchTheme} theme={theme} menuLinks={menu.data.menu_links} altLangs={doc.alternate_languages} lang={lang}>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <SeoMetaTag lang={lang} routeString={routeString} seoTitle={doc.data.title[0].text} seoDescription={doc.data.description[0].text} seoOgImage={doc.data.og_image.url}/>
        <IndexHeader/>
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
    (await client.getSingle('index', ref ? { ref, lang: locale } : { lang: locale })) ||
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

export default Home