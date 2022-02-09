import NextLink from 'next/link'
import React from 'react'

type LinkExProps = {
  children: React.ReactNode
  href: string
  prefetch?: boolean
}

export const LinkEx = ({ children, href, prefetch }: LinkExProps) => {
  return (
    <NextLink href={href} prefetch={prefetch} passHref>
      {children}
    </NextLink>
  )
}
