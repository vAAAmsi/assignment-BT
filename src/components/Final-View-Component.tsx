import React from 'react'
import { DataType } from '../types';
import { Button } from '@chakra-ui/react';
import Swal from 'sweetalert2';

interface Props{
  polledElement : DataType[]
  ComponentsResetHandler:() => void,
  EndHandler: () => void,
};

const FinalViewComponent:React.FC<Props> = ({ polledElement,ComponentsResetHandler,EndHandler  }) => {
  
  const newreset = () => {
    if(polledElement.length === 0){
      Swal.fire({
        icon: "info",
        title: "process not started "
      })
    }else{
      ComponentsResetHandler()
    }
  }
   
  return (
    <div>
        {
          polledElement?.map(i => <li key={i.id}>{i.name}</li>)
        }
        
        <Button onClick={() => EndHandler()}>End</Button>
        <Button onClick={() => newreset()}>Reset</Button>
    </div>
  )
}

export default FinalViewComponent;