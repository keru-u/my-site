import NextLink from "next/link"
import React from "react"

type LinkExProps = {
    children: React.ReactNode
    href: string
}

export const LinkEx = ({children, href}: LinkExProps) => {
    return (
        <NextLink href={href} passHref>
            {children}
        </NextLink>
    )
}