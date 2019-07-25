import * as React from 'react';
import { handleAddShop, handleChangeInventory, handleDetele } from './Action';
import Item from './types/Item';
const ADDSHOPCART = 'addShop';
const ININTDATA = 'inintData';
const CHANGECOUNT = 'changeCount';
const DELETE = 'delete';
interface State {
  shopList: Item[];
  hasShopList: Item[];
}
interface Action {
  type: string;
  hasShopList?: Item[];
  shopList?: Item[];
  shopItem?: Item;
  id?: string;
  opt?: string;
}
const reducer = (state: State, action: Action) => {
  console.log('reducer', state, action);
  switch (action.type) {
    case ADDSHOPCART:
      const temData = handleAddShop(state, action.shopItem);
      return temData;
    case ININTDATA:
      return { hasShopList: action.hasShopList, shopList: action.shopList };
    case CHANGECOUNT:
      const temData1 = handleChangeInventory(state, action.id, action.opt);
      return temData1;
    case DELETE:
      const temData2 = handleDetele(state, action.id);
      return temData2;
    default:
      return state;
  }
};

export default reducer;
