import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import InputComponent from './components/Input-Component';
import { Grid, GridItem } from '@chakra-ui/react';
import ViewComponent from './components/View-Component';
import FinalViewComponent from './components/Final-View-Component';
import { DataType } from './types';
import Swal from 'sweetalert2';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';

function App() {

  const [queue, setQueue] = useState<DataType[]>([])
  const [dummyqueue, setDummyqueue] = useState<DataType[]>([])
  const [name, setName] = useState<string>("")
  const [polledElements, setPolledElements] = useState<DataType[]>([])

  useEffect(() => {
    const intervalId = setInterval(() => {
      pollFromQueue();
    }, 10000);

    return () => clearInterval(intervalId);
  }, [queue]);

  const addToQueue = (e : React.SyntheticEvent) => {
    e.preventDefault();
    if(name.trim() !== '') {
      setQueue([...queue, {id: dummyqueue.length+1,name: name}])
      setDummyqueue([...dummyqueue, {id: dummyqueue.length+1,name: name}])
      setName('')
    }
  }
  const pollFromQueue = () => {
    if(queue.length > 0 ){
      const elementtoshift  = queue.shift();
      setQueue(queue.filter(element => element.id !== elementtoshift?.id))
      setPolledElements([...polledElements,elementtoshift as DataType])
    }
  }

  const EndHandler = () => {
    if(queue.length === 0) {
      Swal.fire({
        icon: "success",
        title: "Success! Process has been End."
      })
    } else{
      const intervalId = setInterval(() => {
        if (queue.length === 0) {
          clearInterval(intervalId);
          Swal.fire({
            icon: "success",
            title: "Success! Process has been End."
          })
        }
      }, 1000);
    }
  }

  const ComponentsResetHandler = () => {
    setQueue([])
    setPolledElements([])
    setDummyqueue([])
    setName('')
  }
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route 
         path='homepage' 
         element={ <>
          <Header />
          <Grid
           h={["auto", "auto", "auto", "auto"]}
           gridTemplateColumns={["1fr", "1fr", "1fr", "10fr 8fr"]}
           gridTemplateRows={["1fr", "1fr", "1fr", "auto 1fr"]}
           gap='1'
           mt="72px"
          >
            <GridItem w="100%">
              <InputComponent name={name} setName={setName} addToQueue={addToQueue} />
              <ViewComponent queue={queue} />
            </GridItem>
            <GridItem w="100%">
              <FinalViewComponent 
               polledElements={polledElements} 
               ComponentsResetHandler={ComponentsResetHandler} 
               EndHandler={EndHandler}
              />
            </GridItem>
          </Grid>
        </>}
        />
      </Routes>
    </>
    // <>
    //   <Header />
    //   <Grid
    //    h={["auto", "auto", "auto", "auto"]}
    //    gridTemplateColumns={["1fr", "1fr", "1fr", "10fr 8fr"]}
    //    gridTemplateRows={["1fr", "1fr", "1fr", "auto 1fr"]}
    //    gap='1'
    //    mt="72px"
    //   >
    //     <GridItem w="100%">
    //       <InputComponent name={name} setName={setName} addToQueue={addToQueue} />
    //       <ViewComponent queue={queue} />
    //     </GridItem>
    //     <GridItem w="100%">
    //       <FinalViewComponent 
    //        polledElements={polledElements} 
    //        ComponentsResetHandler={ComponentsResetHandler} 
    //        EndHandler={EndHandler}
    //       />
    //     </GridItem>
    //   </Grid>
    // </>
  );
}

export default App;
