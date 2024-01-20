import { Flex, Text, Tooltip } from '@chakra-ui/react'
import {ArrowBackIcon} from '@chakra-ui/icons'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header:React.FC = () => {
  const router = useNavigate()
  return (
    <Flex
     w="100%"
     height="70px"
     fontSize="2xl"
     fontFamily="cursive"
     fontWeight="500"
     bg="skyblue"
     color="black.400"
     justifyContent="space-between"
     alignItems="center"
     position="fixed"
     top={0}
     zIndex={1}
    >
      <Tooltip label="back to landing page">
        <ArrowBackIcon ml="10px" cursor="pointer" onClick={() => router('/')} />
      </Tooltip>
      <Text>React Assignment Header</Text>
      <Flex></Flex>
    </Flex>
  )
}

export default Header