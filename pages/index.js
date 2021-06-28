import React, { useEffect } from 'react'
import Head from 'next/head'
import { Client, manageLocal } from '../utils/prismicHelpers'
import { homepageToolbarDocs } from '../utils/prismicToolbarQueries'
import useUpdatePreviewRef from '../utils/hooks/useUpdatePreviewRef'
import useUpdateToolbarDocs from '../utils/hooks/useUpdateToolbarDocs'
import IndexHeader from '../components/page-components/IndexHeader'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import Footer from '../components/common/Footer'

const Home = ({doc, menu, lang, preview, setMenuLinks, theme, switchTheme}) =>{
  return (
    <Layout switchTheme={switchTheme} theme={theme} menuLinks={menu.data.menu_links} altLangs={doc.alternate_languages} lang={lang}>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <Head>
          <title>Carlos Henriquez - Home</title>
          <meta charSet="utf-8" />
          <meta property="og:title" content={`Henriquez.dev - Home`} key="title" />
          <meta property="og:description" content={`Welcome`} key="description" />
          <meta name="keywords" content="HTML, CSS, JavaScript, Web development, React, NextJS, Jamstack, Headless CMS" />
          <meta name="author" content="Carlos Henriquez" />
          <meta name="description" content={`Welcome to Henriquez.dev`} />
          {/* <meta property="og:image" content={doc.data.small_image.url} key="page-image" /> */}
          <link rel="icon" href="/favicon.png" type="image/png"/>
        </Head>
        <IndexHeader imgUrl={doc.data.body[0].primary.image.url}/>
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
    (await client.getSingle('homepage', ref ? { ref, lang: locale } : { lang: locale })) ||
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