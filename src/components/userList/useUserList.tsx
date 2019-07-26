import * as React from 'react';
import { useEffect, useReducer } from 'react';
import http from '@sinoui/http';
import reducer from './Reducer';
import ResponseResult from '../../types/ResponseResult';

function useUserList(url: string) {
  const [state, dispatch] = useReducer(reducer, {
    erro: false,
    loading: false,
    dataSource: [],
  });
  const reload = () => {
    dispatch({ type: 'load' });
    http.get('/local/user/list', {}).then((result: ResponseResult) => {
      if (result.code === 'success') {
        dispatch({ type: 'initData', payLoad: result.data });
      } else {
        dispatch({ type: 'erro' });
      }
    });
  };
  const removeItem = (payLoad: object) => {
    dispatch({ type: 'delete', payLoad });
  };
  const updateItem = (payLoad: object) => {
    dispatch({ type: 'changeName', payLoad });
  };
  const addItem = (payLoad: object) => {
    dispatch({ type: 'addUser', payLoad });
  };
  const searchByName = (payLoad: string) => {
    dispatch({ type: 'searchyName', payLoad });
  };
  useEffect(() => {
    reload();
  }, [url]);

  return {
    ...state,
    removeItem,
    updateItem,
    addItem,
    searchByName,
    reload,
  };
}

export default useUserList;
