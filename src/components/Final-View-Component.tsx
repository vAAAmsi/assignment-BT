import React from 'react'
import { DataType } from '../types';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

interface Props{
  polledElement : DataType[]
  ComponentsResetHandler:() => void,
  EndHandler: () => void,
};

const scrollBarStyle = {
  "::-webkit-scrollbar": {
    height: "4px",
    width: "8px",
    // background: "rgba(0, 0, 0, 0.08)",
  },
  "::-webkit-scrollbar-track": {
    height: "6px",
    width: "6px",
  },
  "::-webkit-scrollbar-thumb": {
    background: "gray",
    borderRadius: "24px",
  },
};

const FinalViewComponent:React.FC<Props> = ({ polledElement,ComponentsResetHandler,EndHandler  }) => {
  return (
    <Flex 
     border="2px solid black" 
     h={{base:'400px',lg:"100%"}} mb={2} 
     flexDir="column" 
     justifyContent="space-between" 
     alignItems="center" 
     overflowY="scroll" 
     css={scrollBarStyle}
    >
      <Flex flexDir="column" gap="20px">
        <Text color="gray.500">Polled elements</Text>
        <Flex flexDir="column" w="200px">
        {
          polledElement?.slice().reverse().map(i => <Flex key={i.id}>
            <Text fontFamily="cursive" fontSize="24px"> {`${i.id})`} {i.name}</Text>
          </Flex>)
        }
        </Flex>
      </Flex>
      <Box
       display="flex"
       justifyContent="center"
       mb="2rem"
       gap="20px"
      >
        <Button bg="red" color="white" onClick={() => EndHandler()}>End</Button>
        <Button bg="gray" color="white" onClick={() => ComponentsResetHandler()}>Reset</Button>
      </Box>
    </Flex>
  )
}

export default FinalViewComponent;