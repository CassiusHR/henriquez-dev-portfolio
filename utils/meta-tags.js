import React from 'react'
import Head from 'next/head'


const SeoMetaTag = ({ lang, routeString, seoTitle = 'Henriquez.dev', seoDescription = 'Welcome to Henriquez.dev', seoOgImage = 'https://images.prismic.io/portfolio-carlos/bebb731b-0635-4f39-ba19-fd42e0010c55_default.jpg?auto=compress,format' }) => {
  return (
    <Head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <link key="canonical" rel="canonical" href={`https://www.henriquez.dev/${lang.currentLang}${routeString}`} />
      <title>{`Carlos Henriquez - ${seoTitle}`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={`Henriquez.dev - ${seoTitle}`} key="title" />
      <meta property="og:description" content={seoDescription} key="description" />
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content="HTML, CSS, JavaScript, Web development, React, NextJS, Jamstack, Headless CMS" />
      <meta name="author" content="Carlos Henriquez" />
      <meta property="og:image" content={seoOgImage} key="page-image" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <link rel="icon" href="/favicon.png" type="image/png"/>
    </Head>
  )
}

export default SeoMetaTag
