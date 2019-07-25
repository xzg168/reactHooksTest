import * as React from 'react';
import { Row, Col, Button } from 'antd';
import Item from './types/Item';
const styles = require('./css/styles.css');
interface Props {
  name: string;
  pic: string;
  description: string;
  shopList: Item[];
  handleChangeInventory: (id: string, type: string) => void;
  handleDetele: (id: string) => void;
  inventory: number;
  id: string;
}
function HasShoppingItem(props: Props) {
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
          onClick={() => props.handleChangeInventory(props.id, 'add')}
        />
        {props.inventory}
        <Button
          className={styles.reduceBtn}
          type="primary"
          shape="circle"
          icon="minus"
          disabled={props.inventory === 1}
          onClick={() => props.handleChangeInventory(props.id, 'reduce')}
        />
      </Col>
      <Col span={3}>
        <Button
          className={styles.deleteBtn}
          type="danger"
          icon="close"
          onClick={() => props.handleDetele(props.id)}
        />
      </Col>
    </Row>
  );
}

export default HasShoppingItem;
