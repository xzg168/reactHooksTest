import * as React from 'react';
import { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import update from 'immutability-helper';
import http from '@sinoui/http';
import ShoppingList from './ShoppingList';
import HasShoppingList from './HasShoppingList';
import Item from './types/Item';
import Res from './types/Res';

function ShoppingCart() {
  const temData = localStorage.getItem('hasShopList');
  const [shopList, setShopList] = useState<Item[]>([]);
  const [hasShopList, setHasShopList] = useState<Item[]>(
    JSON.parse(temData) || [],
  );
  useEffect(() => {
    http.get('/local/shop/list', {}).then((result: Res) => {
      if (result) {
        if (hasShopList.length > 0) {
          let temShopData: Item[] = [];
          result.shops.map((shopItem) => {
            const index = hasShopList.findIndex(
              (temItem) => temItem.id === shopItem.id,
            );
            if (index < 0) {
              // temShopData.push(shopItem);
              temShopData = update(temShopData, { $push: [shopItem] });
            }
            hasShopList.map((item) => {
              if (item.id === shopItem.id) {
                temShopData.push({
                  ...shopItem,
                  inventory: shopItem.inventory - item.inventory,
                });
              }
            });
          });
          setShopList(temShopData);
        } else {
          setShopList(result.shops);
        }
      }
    });
  }, []);
  const handleAddShop = (shopItem: Item) => {
    const newShopList = shopList.map((item: Item) => {
      if (item.id === shopItem.id) {
        return {
          ...item,
          inventory: --item.inventory,
        };
      }
      return item;
    });
    const findShopIndex = hasShopList.findIndex(
      (item) => item.id === shopItem.id,
    );
    if (findShopIndex === -1) {
      hasShopList.push({
        ...shopItem,
        inventory: 1,
      });
      setHasShopList(hasShopList);
      localStorage.setItem('hasShopList', JSON.stringify(hasShopList));
    } else {
      const temp = hasShopList.map((item) => {
        if (item.id === shopItem.id) {
          return {
            ...item,
            inventory: ++item.inventory,
          };
        }
        return item;
      });
      setHasShopList(temp);
      localStorage.setItem('hasShopList', JSON.stringify(hasShopList));
    }
    setShopList(newShopList);
  };

  const handleChangeInventory = (id: string, type: string) => {
    const tempList = hasShopList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          inventory: type === 'add' ? ++item.inventory : --item.inventory,
        };
      }
      return item;
    });

    const newShopList = shopList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          inventory: type === 'add' ? --item.inventory : ++item.inventory,
        };
      }
      return item;
    });
    setShopList(newShopList);
    setHasShopList(tempList);
    localStorage.setItem('hasShopList', JSON.stringify(hasShopList));
  };
  const handleDetele = (id: string) => {
    let buyNumber = 0;
    const index = hasShopList.findIndex((item) => item.id === id);
    buyNumber = hasShopList[index].inventory;
    hasShopList.splice(index, 1);
    const newShopList = shopList.map((shopItem) => {
      if (shopItem.id === id) {
        return {
          ...shopItem,
          inventory: shopItem.inventory + buyNumber,
        };
      }
      return shopItem;
    });
    setShopList(newShopList);
    setHasShopList(hasShopList);
    localStorage.setItem('hasShopList', JSON.stringify(hasShopList));
  };
  return (
    <Row>
      <Col span={10}>
        <h3>商品</h3>
        <ShoppingList shopList={shopList} handleAddShop={handleAddShop} />
      </Col>
      <Col span={13} offset={1}>
        <h3>购物车</h3>
        <HasShoppingList
          shopList={shopList}
          hasShopList={hasShopList}
          handleChangeInventory={handleChangeInventory}
          handleDetele={handleDetele}
        />
      </Col>
    </Row>
  );
}
export default ShoppingCart;
