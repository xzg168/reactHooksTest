import * as React from 'react';
import { useContext } from 'react';
import { Button, Card } from 'antd';
import Item from './types/Item';
import { ShopCartContext } from './ShoppingCart';
interface Props {
  item: Item;
}
function ShoppingItem(props: Props) {
  const { dispatch } = useContext(ShopCartContext);
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
        onClick={() => dispatch({ type: 'addShop', shopItem: props.item })}
      >
        加入购物车
      </Button>
    </Card>
  );
}
export default ShoppingItem;
