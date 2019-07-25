import * as React from 'react';
import Item from './types/Item';
interface State {
  shopList: Item[];
  hasShopList: Item[];
}
// 添加商品
export const handleAddShop = (state: State, shopItem: Item) => {
  const newShopList = state.shopList.map((item: Item) => {
    if (item.id === shopItem.id) {
      return {
        ...item,
        inventory: --item.inventory,
      };
    }
    return item;
  });
  let newHasShopList = state.hasShopList;
  const findShopIndex = state.hasShopList.findIndex(
    (item) => item.id === shopItem.id,
  );
  if (findShopIndex === -1) {
    newHasShopList.push({
      ...shopItem,
      inventory: 1,
    });
  } else {
    const temp = state.hasShopList.map((item: Item) => {
      if (item.id === shopItem.id) {
        return {
          ...item,
          inventory: ++item.inventory,
        };
      }
      return item;
    });
    newHasShopList = temp;
  }
  localStorage.setItem('hasShopList', JSON.stringify(newHasShopList));
  return { hasShopList: newHasShopList, shopList: newShopList };
};
// 改变数量
export const handleChangeInventory = (
  state: State,
  id: string,
  type: string,
) => {
  const tempList = state.hasShopList.map((item: Item) => {
    if (item.id === id) {
      return {
        ...item,
        inventory: type === 'add' ? ++item.inventory : --item.inventory,
      };
    }
    return item;
  });

  const newShopList = state.shopList.map((item: Item) => {
    if (item.id === id) {
      return {
        ...item,
        inventory: type === 'add' ? --item.inventory : ++item.inventory,
      };
    }
    return item;
  });
  localStorage.setItem('hasShopList', JSON.stringify(tempList));
  return { hasShopList: tempList, shopList: newShopList };
};
export const handleDetele = (state: State, id: string) => {
  let buyNumber = 0;
  const index = state.hasShopList.findIndex((item: Item) => item.id === id);
  buyNumber = state.hasShopList[index].inventory;
  state.hasShopList.splice(index, 1);
  const newShopList = state.shopList.map((shopItem: Item) => {
    if (shopItem.id === id) {
      return {
        ...shopItem,
        inventory: shopItem.inventory + buyNumber,
      };
    }
    return shopItem;
  });
  localStorage.setItem('hasShopList', JSON.stringify(state.hasShopList));
  return { hasShopList: state.hasShopList, shopList: newShopList };
};
