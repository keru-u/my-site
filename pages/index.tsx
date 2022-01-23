import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>けるのうたわれ倉庫</title>
        <meta name="description" content="作ったものを置く予定です。工事中です。" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#7d9661" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#7d9661" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      </Head>
      <h1>けるのうたわれ倉庫</h1>
      <p>工事中です。</p>
      <p>おそらく１月中に更新されるはずです。</p>
      <p></p>
    </div>
  )
}

export default Home
