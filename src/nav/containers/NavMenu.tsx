import React, { Component } from 'react';
import { Layout, Menu, Icon, Typography } from 'antd';
import { Link } from 'react-router-dom';
import Resource from '../../page/resource/types/Resource';

interface Props {
  collapsed: boolean;
  currentUser: {
    userId: string;
    username: string;
  };
}

interface State {
  menuList: Resource[];
  selectedKeys: string[];
  openKeys: string[];
}
class NavMenu extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      menuList: [
        { key: '0', path: '/shop/list', menuName: '购物车' },
        { key: '1', path: '/user/list', menuName: '用户列表' },
        { key: '2', path: '/popover/use', menuName: '自定义popover' },
        { key: '3', path: '/customTabs/demo', menuName: '自定义Tabs' },
        { key: '4', path: '/emailInfoCard/demo', menuName: '邮箱card' },
        { key: '5', path: '/reactDndTest/demo', menuName: 'ReactDndTest' },
        { key: '6', path: '/reactDndHookTest/demo', menuName: 'ReactDndHookTest' },
      ],
      selectedKeys: [],
      openKeys: [],
    };
  }

  public onChangeSelectMenu = (path: string) => {
    this.setState({
      selectedKeys: [path],
    });
  };

  // 点击含有子菜单的菜单节点
  public onChangeSubMenu = (path: string) => {
    if (this.state.openKeys.toString().indexOf(path) !== -1) {
      this.setState({
        openKeys: [],
      });
    } else {
      this.setState({
        openKeys: [path],
      });
    }
  };
  public render() {
    const { Sider } = Layout;
    const { SubMenu } = Menu;
    // 导航菜单折叠或取消折叠时 动态设置属性
    const menuProps = this.props.collapsed
      ? {}
      : {
          selectedKeys: this.state.selectedKeys,
          openKeys: this.state.openKeys,
        };
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
        width={240}
        theme="light"
      >
        <div className="nav-header">
          <div className="logo-title">
            <Typography.Title
              level={4}
              style={{ marginBottom: '0', letterSpacing: '8px' }}
            >
              demo
            </Typography.Title>
          </div>
        </div>
        <Menu mode="inline" theme="light" {...menuProps}>
          {/* <Menu.Item key="/" onClick={() => this.onChangeSelectMenu('/')}>
            <Link to="/">
              <Icon type="desktop" />
              <span>系统首页</span>
            </Link>
          </Menu.Item> */}
          {this.state.menuList.map((item: Resource) =>
            !item.children || item.children.length === 0 ? (
              <Menu.Item
                key={item.path}
                onClick={() => this.onChangeSelectMenu(item.path)}
              >
                <Link to={item.path}>
                  {item.icon && <Icon type={item.icon} />}
                  <span>{item.menuName}</span>
                </Link>
              </Menu.Item>
            ) : (
              <SubMenu
                key={item.path}
                onTitleClick={() => this.onChangeSubMenu(item.path)}
                title={
                  <span>
                    <Icon type={item.icon} />
                    <span>{item.menuName}</span>
                  </span>
                }
              >
                {item.children.map((item: Resource) => (
                  <Menu.Item
                    key={item.path}
                    onClick={() => this.onChangeSelectMenu(item.path)}
                  >
                    <Link to={item.path}>{item.menuName}</Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            ),
          )}
        </Menu>
      </Sider>
    );
  }
}

export default NavMenu;
