import ShoppingCart from '../components/shopCartReducer/ShoppingCart';
import UserList from '../components/userList/UserList';

const routes = [
  {
    path: '/shop/list',
    component: ShoppingCart,
    title: '购物车',
  },
  {
    path: '/user/list',
    component: UserList,
    title: '用户列表',
  },
];

export default routes;
