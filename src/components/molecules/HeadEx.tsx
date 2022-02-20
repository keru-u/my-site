/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'

type HeadExProps = {
  title: string
  description: string
}

export const HeadEx = ({ title, description }: HeadExProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#7d9661" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Reggae+One&display=optional"
        />
        <meta name="msapplication-TileColor" content="#7d9661" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      </Head>
    </>
  )
}
