import * as React from 'react';
import { useState, useEffect, useReducer, useContext } from 'react';
import { Row, Col } from 'antd';
import ShoppingItem from './ShoppingItem';
import Item from './types/Item';
import { ShopCartContext } from './ShoppingCart';
function ShoppingList() {
  const contextValue = useContext(ShopCartContext);
  return (
    <Row gutter={10}>
      {contextValue.state.shopList.map((item: Item, index: number) => (
        <Col span={8} key={index}>
          <ShoppingItem key={index} item={item} />
        </Col>
      ))}
    </Row>
  );
}
export default ShoppingList;
