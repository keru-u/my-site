import { Heading } from '@chakra-ui/react'

type HeadingExProps = {
  title: string
  size: string
}

export const HeadingEx = ({ title, size }: HeadingExProps) => {
  return (
    <>
      <br />
      <Heading size={size} fontFamily="Reggae One">
        {title}
      </Heading>
      <br />
    </>
  )
}
