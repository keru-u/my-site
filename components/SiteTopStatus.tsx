import Image from 'next/image'
import { Heading, Box, Text } from '@chakra-ui/react'

import { Work } from './Work'
import { HeadingEx } from './HeadingEx'

type SiteTopStatusProps = {
  title: string
  currentStatus: String
}

export const SiteTopStatus = ({ title, currentStatus }: SiteTopStatusProps) => {
  return (
    <>
      <Box m={8} bg="white" borderRadius="md" p={5} shadow="md">
        <HeadingEx size="lg" title={title} />
        <Image src="/images/avatar.svg" width={48} height={48} alt="My avatar" />
        <Text fontSize="md">
          {currentStatus}
          <br />
          <br />
          <Work href="https://github.com/keru-u/my-site/projects/1" title="進捗状況：GitHub" />
        </Text>
      </Box>
    </>
  )
}
