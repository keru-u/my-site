import type { NextPage } from 'next'

import Image from 'next/image'
import { Link, Box,Text,Heading} from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'

import Layout from '../../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout title='けるのうたわれ倉庫 トップページ' description='作ったものを置く予定です。'>

      <Box m={8} bg='white'  borderRadius='md'  p={5} shadow='md'  >
        <Heading size="lg">けるのうたわれ倉庫</Heading>
        <br />
        <Image src="/images/avatar.svg" width={48} height={48}  alt="My avatar" />
        <Text fontSize='xl'>
          工事中です。<br />
          １月中に更新されるはずです。(願望)
        </Text>
        <br />
        <br />
        <Link  href='https://github.com/keru-u/my-site/projects/1' isExternal>進捗状況：GitHub<ExternalLinkIcon mx='2px' /></Link>
      </Box>

      <Box m={8} bg='white'  borderRadius='md'  p={5} shadow='md'  >
        <Heading size="md">過去に作ったもの</Heading>
        <br /><br />
        <Heading size="md">ツール</Heading>
        <br />
        <Link  href='https://odaibako.net/gacha/1077' isExternal>ロスフラお題ガチャ<ExternalLinkIcon mx='2px' /></Link>
        <br /><br />
        <Link  href='https://odaibako.net/gacha/2477' isExternal>ロスフラふわっとしたお題ガチャ<ExternalLinkIcon mx='2px' /></Link>
        <br /><br />
        <Link  href='https://mekepon.com/bingo/zUADOZnhhJAztKVi4QwO' isExternal>ロスフラ廃人度チェック<ExternalLinkIcon mx='2px' /></Link>
        <br /><br />
        <Link  href='https://docs.google.com/spreadsheets/d/1ujpqMT4OHgyJsyAo2qlz_JA1ZtNXvnEHgNsAnR-wKxY/edit' isExternal>調伏戦編成シミュレーター<ExternalLinkIcon mx='2px' /></Link>
        <br /><br />
        <Link  href='https://docs.google.com/spreadsheets/d/16vo2_834HyC2nXOQHBGeLBxywaf5CrN52KoA-qmfr7E/edit' isExternal>ロスフラCT計算機<ExternalLinkIcon mx='2px' /></Link>
        <br /><br /><br />
        <Heading size="md">イラスト</Heading>
        <br />
        <Link  href='https://poipiku.com/1765122/' isExternal>ポイピク<ExternalLinkIcon mx='2px' /></Link>
      </Box>

      <Box m={8} bg='white'  borderRadius='md'  p={5} shadow='md'  >
        <Heading size="md">連絡先</Heading>
        <br />
        <Link  href='https://mobile.twitter.com/keru_utaware' isExternal>Twitter：@keru_utaware<ExternalLinkIcon mx='2px' /></Link>
      </Box>

    </Layout>
  )
}

export default Home
