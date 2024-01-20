import { Flex } from '@chakra-ui/react';
import React from 'react'
import { DataType } from '../types';

interface Props {
  queue: DataType[]
}

const ViewComponent:React.FC<Props> = ({queue}) => {
  console.log(queue)
  return (
   <Flex bg="pink"  flexDir="column">
      {
        queue.reverse().map(element => {
          return(<Flex key={element.id}>{element.name}</Flex>)
        })
      }
   </Flex>
  )
}

export default ViewComponent; 