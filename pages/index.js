import Head from 'next/head'
import HeaderSection from '../components/common/HeaderSection'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Carlos Henriquez - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderSection/>
    </div>
  )
}
