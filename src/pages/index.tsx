import type { NextPage } from 'next'

import Image from 'next/image'
import { Link, Box, Text, Heading } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import Layout from '../../components/Layout'
import { Work } from '../../components/Work'

const Home: NextPage = () => {
  const title: string = 'けるのうたわれ倉庫'
  const description: string = '作ったものを置く予定です。'
  const currentStatus: string = '2月中に何か公開予定です。'

  return (
    <Layout title={title} description={description}>
      <Box m={8} bg="white" borderRadius="md" p={5} shadow="md">
        <Heading size="lg">{title}</Heading>
        <br />
        <Image src="/images/avatar.svg" width={48} height={48} alt="My avatar" />
        <Text fontSize="xl">
          {currentStatus}
          <br />
          <br />
          <Work href="https://github.com/keru-u/my-site/projects/1" title="進捗状況：GitHub" />
        </Text>
      </Box>

      <Box m={8} bg="white" borderRadius="md" p={5} shadow="md">
        <Heading size="md">過去に作ったもの</Heading>
        <br />
        <br />
        <Heading size="md">ツール</Heading>
        <br />
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
        <br />
        <Heading size="md">イラスト</Heading>
        <br />
        <Work href="https://poipiku.com/1765122/" title="ポイピク" />
      </Box>
    </Layout>
  )
}

export default Home
