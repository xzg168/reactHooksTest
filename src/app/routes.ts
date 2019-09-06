import ShoppingCart from '../components/shopCartReducer/ShoppingCart';
import UserList from '../components/userList/UserList';
import PopoverUse from '../components/popover/PopoverUse';
import TodoInfoList from '../demos/TodoInfoList';
import EmailInfoCard from '../demos/EmailInfoCard';

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
  {
    path: '/popover/use',
    component: PopoverUse,
    title: '自定义Popover',
  },
  {
    path: '/customTabs/demo',
    component: TodoInfoList,
    title: '自定义tabs',
  },
  {
    path: '/emailInfoCard/demo',
    component: EmailInfoCard,
    title: '邮箱card',
  },
];

export default routes;
