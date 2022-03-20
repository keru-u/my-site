import type { NextPage } from 'next'

import { Box } from '@chakra-ui/react'

import Layout from '../components/templates/Layout'
import { SiteTopStatus } from '../components/organisms/SiteTopStatus'
import { HeadingEx } from '../components/molecules/HeadingEx'

const Test: NextPage = () => {
  const title: string = 'テストページ'
  const description: string = '現在工事中です。'
  const src: string = '/images/avatar.png'

  return (
    <Layout title={title} description={description}>
      <SiteTopStatus title={title} currentStatus={description} src={src} />
      <Box m={8} bg="white" borderRadius="md" p={5} shadow="md">
        <HeadingEx size="sm" title="テストページ" />
      </Box>
    </Layout>
  )
}

export default Test
