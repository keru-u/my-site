import type { NextPage } from 'next'

import { Box } from '@chakra-ui/react'

import { Layout } from '../../components/Layout'
import { Work } from '../../components/Work'
import { SiteTopStatus } from '../../components/SiteTopStatus'
import { HeadingEx } from '../../components/HeadingEx'

const Home: NextPage = () => {
  const title: string = 'けるのうたわれ倉庫'
  const description: string = '作ったものを置く予定です。'
  const currentStatus: string = '2月中に何か公開予定です。'

  return (
    <Layout title={title} description={description}>
      <SiteTopStatus title={title} currentStatus={currentStatus} />
      <Box m={8} bg="white" borderRadius="md" p={5} shadow="md">
        <HeadingEx size="md" title="過去に作ったもの" />
        <HeadingEx size="sm" title="ツール" />
        <Work href="https://odaibako.net/gacha/1077" title="ロスフラお題ガチャ" />
        <Work href="https://odaibako.net/gacha/2477" title="ロスフラふわっとしたお題ガチャ" />
        <Work
          href="https://mekepon.com/bingo/zUADOZnhhJAztKVi4QwO"
          title="ロスフラ廃人度チェック"
        />
        <Work
          href="https://docs.google.com/spreadsheets/d/1ujpqMT4OHgyJsyAo2qlz_JA1ZtNXvnEHgNsAnR-wKxY/edit"
          title="調伏戦編成シミュレーター"
        />
        <Work
          href="https://docs.google.com/spreadsheets/d/16vo2_834HyC2nXOQHBGeLBxywaf5CrN52KoA-qmfr7E/edit"
          title="ロスフラCT計算機"
        />
        <HeadingEx size="md" title="イラスト" />
        <Work href="https://poipiku.com/1765122/" title="ポイピク" />
      </Box>
    </Layout>
  )
}

export default Home
