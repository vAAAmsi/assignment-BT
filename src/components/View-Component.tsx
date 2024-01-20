import { Flex, Text } from '@chakra-ui/react';
import React from 'react'
import { DataType } from '../types';

interface Props {
  queue: DataType[]
}

const scrollBarStyle = {
  "::-webkit-scrollbar": {
    height: "4px",
    width: "8px",
    background: "rgba(0, 0, 0, 0.08)",
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

const ViewComponent:React.FC<Props> = ({queue}) => {
  console.log(queue)
  return (
   <Flex border="2px solid black" mt="1" h="415px" flexDir="column" overflowY="scroll" css={scrollBarStyle}>
      {
        queue.slice().reverse().map(element => 
          <Flex 
           key={element.id}
           ml="3rem"
          >
            <Flex mt="2px" flexDir="column" gap="20px">
              <Text fontFamily="cursive" fontSize="24px">{element.name}</Text>
            </Flex>
          </Flex>
        )
      }
   </Flex>
  )
}

export default ViewComponent; 