import * as React from 'react';
import HasShoppingItem from './HasShoppingItem';
import Item from './types/Item';
interface Props {
  hasShopList: Item[];
  shopList: Item[];
  handleChangeInventory: () => void;
  handleDetele: () => void;
}
function HasShoppingList(props: Props) {
  return (
    <div>
      {props.hasShopList.map((item: Item, index: number) => (
        <HasShoppingItem
          shopList={props.shopList}
          key={index}
          {...item}
          handleChangeInventory={props.handleChangeInventory}
          handleDetele={props.handleDetele}
        />
      ))}
    </div>
  );
}

export default HasShoppingList;
