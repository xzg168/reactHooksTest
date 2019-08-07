import React from 'react';
import produce from 'immer';

let currentState = {
  x: {
    z: 1,
  },
  y: true,
};
function ImmerTest() {
  //原始的办法
  // let cloneState = currentState;
  // cloneState.y = false;
  // console.log('currentState', currentState);
  // console.log('CloneState', cloneState);
  // console.log('====', cloneState === currentState);
  //使用immer
  let immerObj = produce(currentState, (draf) => {
    draf.y = false;
  });
  console.log('currentState', currentState);
  console.log('immerObj', immerObj);
  console.log('====', immerObj === currentState);
}

export default ImmerTest;
