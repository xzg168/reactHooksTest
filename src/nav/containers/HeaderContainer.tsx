import React from 'react';
import { connect } from 'react-redux';
import http from '@sinoui/http';
import { Layout, Modal, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
const { Header } = Layout;

class AppHeader extends React.PureComponent {
  private timer;
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  private showConfirm = () => {
    const logout = this.props.onLogout;
    const history = this.props.history;
    Modal.confirm({
      title: '提示',
      content: '确定退出？',
      onOk() {
        http.post('/admin/logout').then(() => {
          logout();
          history.replace('/');
        });
      },
    });
  };

  public showChangePwdModal = () => {
    this.setState({
      visible: true,
    });
  };
  public render() {
    const { currentUser } = this.props;

    return (
      <React.Fragment>
        <Header style={{ background: '#fff', padding: '0 20px' }}>
          <Icon
            className="trigger"
            type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.props.changeMenuCollapsed}
          />
        </Header>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messageList: state.message && state.message.messageList,
  };
};

export default withRouter(connect(mapStateToProps)(AppHeader));
