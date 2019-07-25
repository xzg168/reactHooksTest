import * as React from 'react';
import { Row, Col } from 'antd';
import ShoppingItem from './ShoppingItem';
import Item from './types/Item';
interface Props {
  shopList: Item[];
  handleAddShop: () => void;
}
function ShoppingList(props: Props) {
  return (
    <Row gutter={10}>
      {props.shopList.map((item: Item, index: number) => (
        <Col span={8} key={index}>
          <ShoppingItem
            key={index}
            item={item}
            handleAddShop={props.handleAddShop}
          />
        </Col>
      ))}
    </Row>
  );
}
export default ShoppingList;
