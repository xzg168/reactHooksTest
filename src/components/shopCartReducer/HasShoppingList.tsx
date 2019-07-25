import * as React from 'react';
import { useContext } from 'react';
import HasShoppingItem from './HasShoppingItem';
import Item from './types/Item';
import { ShopCartContext } from './ShoppingCart';
function HasShoppingList() {
  const { state } = useContext(ShopCartContext);
  return (
    <div>
      {state.hasShopList.map((item: Item, index: number) => (
        <HasShoppingItem shopList={state.shopList} key={index} {...item} />
      ))}
    </div>
  );
}

export default HasShoppingList;
