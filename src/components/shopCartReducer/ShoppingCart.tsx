import * as React from 'react';
import { useEffect, useReducer } from 'react';
import { Col, Row } from 'antd';
import update from 'immutability-helper';
import http from '@sinoui/http';
import ShoppingList from './ShoppingList';
import HasShoppingList from './HasShoppingList';
import reducer from './Reducer';
import Item from './types/Item';
import Res from './types/Res';
import ImmerTest from './ImmerTest';
const initialCount = {
  shopList: [],
  hasShopList: [],
};
export const ShopCartContext = React.createContext(initialCount);
function ShoppingCart() {
  const [state, dispatch] = useReducer(reducer, initialCount);
  const localData = localStorage.getItem('hasShopList');
  const temData = localData ? JSON.parse(localData) : [];
  useEffect(() => {
    http.get('/local/shop/list', {}).then((result: Res) => {
      if (result) {
        if (temData.length > 0) {
          let temShopData: Item[] = [];
          result.shops.map((shopItem) => {
            const index = temData.findIndex(
              (temItem: Item) => temItem.id === shopItem.id,
            );
            if (index < 0) {
              // temShopData.push(shopItem);
              temShopData = update(temShopData, { $push: [shopItem] });
            }
            temData.map((item: Item) => {
              if (item.id === shopItem.id) {
                temShopData.push({
                  ...shopItem,
                  inventory: shopItem.inventory - item.inventory,
                });
              }
            });
          });
          dispatch({
            type: 'inintData',
            shopList: temShopData,
            hasShopList: temData,
          });
        } else {
          dispatch({
            type: 'inintData',
            shopList: result.shops,
            hasShopList: temData,
          });
        }
      }
    });
  }, []);
  return (
    <ShopCartContext.Provider value={{ state, dispatch }}>
      <Row>
        <Col span={10}>
          <h3>商品</h3>
          <ShoppingList />
        </Col>
        <Col span={13} offset={1}>
          <h3>购物车</h3>
          <HasShoppingList />
        </Col>
      </Row>
    </ShopCartContext.Provider>
  );
}
export default ShoppingCart;
