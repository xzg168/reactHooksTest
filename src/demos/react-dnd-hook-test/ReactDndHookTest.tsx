import * as React from 'react';
import { DndProvider } from 'react-dnd';
import HTMLBackend from 'react-dnd-html5-backend';
import Container from './Container';

class ReactDndHookTest extends React.Component {
  public render() {
    return (
      <DndProvider backend={HTMLBackend}>
        <Container />
      </DndProvider>
    );
  }
}

export default ReactDndHookTest;
