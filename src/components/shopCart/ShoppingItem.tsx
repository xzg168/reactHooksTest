import * as React from 'react';
import { Button, Card } from 'antd';
import Item from './types/Item';
interface Props {
  item: Item;
  handleAddShop: (item: Item) => void;
}
function ShoppingItem(props: Props) {
  return (
    <Card
      title={props.item.name}
      hoverable
      cover={<img alt="example" src={props.item.pic} />}
    >
      <p>描述:{props.item.description}</p>
      <p>库存量:{props.item.inventory}</p>
      <Button
        type="primary"
        disabled={props.item.inventory < 1}
        onClick={() => props.handleAddShop(props.item)}
      >
        加入购物车
      </Button>
    </Card>
  );
}
export default ShoppingItem;
