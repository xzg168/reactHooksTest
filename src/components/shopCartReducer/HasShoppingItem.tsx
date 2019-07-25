import * as React from 'react';
import { useContext } from 'react';
import { Row, Col, Button } from 'antd';
import Item from './types/Item';
import { ShopCartContext } from './ShoppingCart';
const styles = require('./css/styles.css');
interface Props {
  name: string;
  pic: string;
  description: string;
  shopList: Item[];
  inventory: number;
  id: string;
}
function HasShoppingItem(props: Props) {
  const contextValue = useContext(ShopCartContext);

  const isDisabledButton = (shopList: Item[], id: string, type: string) => {
    const shop = shopList.find((item) => item.id === id);
    return shop && (type === 'add' ? shop.inventory <= 0 : '') ? true : false;
  };
  return (
    <Row className={styles.hasShopItem}>
      <Col span={3}>{props.name}</Col>
      <Col span={3}>
        <img className={styles.pic} src={props.pic} alt={props.name} />
      </Col>
      <Col span={3}>{props.description}</Col>
      <Col span={5}>
        <Button
          className={styles.addBtn}
          type="primary"
          shape="circle"
          icon="plus"
          disabled={isDisabledButton(props.shopList, props.id, 'add')}
          onClick={() =>
            contextValue.dispatch({
              type: 'changeCount',
              id: props.id,
              opt: 'add',
            })
          }
        />
        {props.inventory}
        <Button
          className={styles.reduceBtn}
          type="primary"
          shape="circle"
          icon="minus"
          disabled={props.inventory === 1}
          onClick={() =>
            contextValue.dispatch({
              type: 'changeCount',
              id: props.id,
              opt: 'reduce',
            })
          }
        />
      </Col>
      <Col span={3}>
        <Button
          className={styles.deleteBtn}
          type="danger"
          icon="close"
          onClick={() =>
            contextValue.dispatch({ type: 'delete', id: props.id })
          }
        />
      </Col>
    </Row>
  );
}

export default HasShoppingItem;
