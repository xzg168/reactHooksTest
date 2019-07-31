import * as React from 'react';
import { Layout } from 'antd';
import {Suspense} from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NavMenu from '../containers/NavMenu';
import HeaderContainer from '../containers/HeaderContainer';
import routes from '../../app/routes';
import styles from '../Layout.css';
import User from '../../page/User/types/User';
const { Header, Content } = Layout;

interface Props {
  currentUser: User;
}

interface State {
  collapsed: boolean;
}
export default class MainLayout extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  public changeMenuCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  public render() {
    return (
      
      <Router>
        <Suspense fallback='...'>
        <Layout>
          <NavMenu
            collapsed={this.state.collapsed}
            currentUser={this.props.currentUser}
          />
          <Content>
            <HeaderContainer
              collapsed={this.state.collapsed}
              changeMenuCollapsed={this.changeMenuCollapsed}
              currentUser={this.props.currentUser}
            />
            <div className={styles.appContent}>
              <div
                style={{
                  background: '#ffffff',
                  height: '100%',
                  overflowY: 'auto',
                }}
              >
                <Switch>
                  <Route path="/" exact component={() => <div>首页!</div>} />
                  {routes.map((item, index) => (
                    <Route
                      key={index}
                      path={item.path}
                      component={item.component}
                    />
                  ))}
                  {/*path为空用来匹配任意路由 */}
                  <Route
                    component={() => (
                      <div
                        style={{
                          display: 'flex',
                          height: '100%',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        请等待, 页面正在建设中...
                      </div>
                    )}
                  />
                </Switch>
              </div>
            </div>
          </Content>
        </Layout>
        </Suspense>
      </Router>
      
    );
  }
}
