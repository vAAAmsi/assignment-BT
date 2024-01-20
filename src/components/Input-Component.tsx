import { Button, Flex, Input } from '@chakra-ui/react';
import React from 'react'
// import { DataType } from '../types';
interface InputProps {
    name: string,
    setName: React.Dispatch<React.SetStateAction<string>>,
    addToQueue: (e : React.SyntheticEvent) => void,
}

const InputComponent:React.FC<InputProps> = ({name, setName, addToQueue}) => {

  return (
    <Flex ml="2px" bg="gray.100" h="200px" p="20px" justifyContent="center" border="2px solid black">
        <form onSubmit={(e) =>addToQueue(e)} style={{display:"flex",gap:"20px",marginTop:"40px"}}>
            <Input 
             w={{base:"200px",small:"250px",md:"300px"}}
             placeholder='Enter Text To be Added'
             value={name}
             onChange={(e) => setName(e.target.value)}
             type='string'
             isRequired
             variant="outlined"
            />
            <Button 
             w={{base:"100px",small:"100px",md:"150px"}} 
             bg="green.400" color='white' type='submit' 
             _hover={{ bg: 'green.300' }}
            >
              Add
            </Button>
        </form>
    </Flex>
  )
}

export default InputComponent;