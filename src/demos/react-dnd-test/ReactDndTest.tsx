import * as React from 'react';
import { DndProvider } from 'react-dnd';
import HTMLBackend from 'react-dnd-html5-backend';
import Box from './Box';
import Dustbin from './Dustbin'

class ReactDndTest extends React.Component{
   render(){
    return(
      <DndProvider backend={ HTMLBackend }>
      <Box/>
      <Dustbin/>
      </DndProvider>
     )
   }
}

export default ReactDndTest