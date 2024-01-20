import React from 'react'
import { DataType } from '../types';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

interface FinalComponentProps{
  polledElements : DataType[]
  ComponentsResetHandler:() => void,
  EndHandler: () => void,
};

const FinalViewComponent:React.FC<FinalComponentProps> = ({ polledElements,ComponentsResetHandler,EndHandler  }) => {
  return (
    <Flex 
     bg="gray.200"
     border="2px solid black" 
     h={{base:'400px',lg:"100%"}} mb={2} mr={{base:"0",lg:"3px"}}
     ml={{base:"2px",lg:"0"}}
     flexDir="column" 
     justifyContent="space-between" 
     alignItems="center" 
     overflowY="scroll"     
    >
      <Flex flexDir="column" gap="20px">
        <Text color="gray.500" textAlign="center">Polled elements</Text>
        <Flex flexDir="column" justifyContent="center" alignItems="center">
        {
          polledElements?.slice().reverse().map(i => <Flex key={i.id}>
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
        <Button 
         bg="red" 
        //  isDisabled={polledElements.length === 0} 
         _hover={{ bg: 'red.400' }} 
         color="white" 
         onClick={() => EndHandler()}
        >
          End
        </Button>
        <Button bg="gray" _hover={{ bg: 'gray.400' }} color="white" onClick={() => ComponentsResetHandler()}>Reset</Button>
      </Box>
    </Flex>
  )
}

export default FinalViewComponent;