import * as React from 'react';
import Item from './Item';
import update from 'immutability-helper';
interface State {
  erro: boolean;
  loading: boolean;
  dataSource: Item[];
}
const deleteUser = (userData: Item[], item: Item) => {
  const index = userData.findIndex((userItem) => item.id === userItem.id);
  const newUserData = update(userData, { $splice: [[index, 1]] });
  return newUserData;
};
const changeUser = (userData: Item[], item: Item) => {
  const index = userData.findIndex((userItem) => item.id === userItem.id);
  const newUserData = update(userData, { [index]: { name: { $set: 'xxx' } } });
  return newUserData;
};
const searchUser = (userData: Item[], name: string) => {
  const SerachData = userData.filter((item: Item) => {
    return item.name.indexOf(name) > -1;
  });
  return SerachData;
};
const reducer = (state: State, action: { type: string; payLoad?: any }) => {
  switch (action.type) {
    case 'load':
      return { ...state, loading: true };
    case 'erro':
      return { ...state, erro: true };
    case 'initData':
      return { ...state, dataSource: action.payLoad, loading: false };
    case 'searchyName':
      const searchData = searchUser(state.dataSource, action.payLoad);
      return { ...state, dataSource: searchData };
    case 'addUser':
      return {
        ...state,
        dataSource: update(state.dataSource, {
          $push: [
            {
              id: String(new Date().getTime()),
              name: '新加',
              job: '老师',
              age: 22,
              address: '你猜',
            },
          ],
        }),
      };
    case 'changeName':
      const changeUserData = changeUser(state.dataSource, action.payLoad);
      return { ...state, dataSource: changeUserData };
    case 'delete':
      const userData = deleteUser(state.dataSource, action.payLoad);
      return { ...state, dataSource: userData };
    default:
      return state;
  }
};

export default reducer;
