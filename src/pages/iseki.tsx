import type { NextPage } from 'next'

import { Box } from '@chakra-ui/react'

import Layout from '../components/templates/Layout'
import { SiteTopStatus } from '../components/organisms/SiteTopStatus'
import { HeadingEx } from '../components/molecules/HeadingEx'
import { Work } from '../components/molecules/Work'

const Iseki: NextPage = () => {
  const title: string = '遺跡調査報酬 統計調査'
  const description: string = '現在工事中です。'
  const src: string = '/images/avatar.png'

  return (
    <Layout title={title} description={description}>
      <SiteTopStatus title={title} currentStatus={description} src={src} />
      <Box m={8} bg="white" borderRadius="md" p={5} shadow="md">
        <HeadingEx size="sm" title="集計結果(仮表示用)" />
        <Work
          href="https://docs.google.com/spreadsheets/d/1d2jsLXtdLdIYX66dXfgN8PNaxI28o7MxvTy4qdLodWU/edit#gid=1900563252"
          title="Googleスプレッドシート 探索報酬の統計調査-集計結果β-水の遺跡"
        />
        <HeadingEx size="sm" title="調査結果入力フォーム" />
        <Work
          href="https://docs.google.com/forms/d/e/1FAIpQLScpe4WwCxSdVvtC2sll9y-tvkUd1l0Q8KOCceSED15ErknLLg/viewform"
          title="Googleフォーム 探索報酬の統計調査-水の遺跡"
        />
      </Box>
    </Layout>
  )
}

export default Iseki
