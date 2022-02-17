import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import { LinkEx } from '../atoms/LinkEx'

type WorkProps = {
  title: string
  href: string
}

export const Work = ({ title, href }: WorkProps) => {
  return (
    <>
      <LinkEx href={href} prefetch={false}>
        <Link isExternal>
          {title}
          <ExternalLinkIcon mx="2px" />
        </Link>
      </LinkEx>
      <br />
      <br />
    </>
  )
}
