import { Button, Flex, Input } from '@chakra-ui/react';
import React from 'react'
// import { DataType } from '../types';
interface Props {
    name: string,
    setName: React.Dispatch<React.SetStateAction<string>>,
    addToQueue: (e : React.SyntheticEvent) => void,
}

const InputComponent:React.FC<Props> = ({name, setName, addToQueue}) => {

  return (
    <Flex h="200px" p="20px" justifyContent="center" border="2px solid black">
        <form onSubmit={(e) =>addToQueue(e)} style={{display:"flex",gap:"20px"}}>
            <Input 
             w="200px"
             placeholder='Enter Text To be Added'
             value={name}
             onChange={(e) => setName(e.target.value)}
             type='string'
             isRequired
            />
            <Button type='submit' >Add</Button>
        </form>
    </Flex>
  )
}

export default InputComponent;