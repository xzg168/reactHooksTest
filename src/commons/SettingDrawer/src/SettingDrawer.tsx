import * as React from 'react';
import { Icon, Drawer, message } from 'antd';
import { connect } from 'react-redux';
import http from '@sinoui/http';
import ResponseResult from '../../../types/ResponseResult';
import ThemeColor from './ThemeColor';
const styles = require('./styles.css');
interface State {
  collapse: boolean;
  primaryColor: string;
}
interface Props {
  themeColor: string;
}
class SettingDrawer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      collapse: false,
      primaryColor: localStorage.getItem(props.themeColor) || '#1890FF',
    };
  }
  public componentDidMount() {
    window.less
      .modifyVars({
        '@primary-color': this.state.primaryColor,
        '@link-color': this.state.primaryColor,
        '@btn-primary-bg': this.state.primaryColor,
      })
      .then(() => {
        http.get('/upms/user/userconfig').then((res: ResponseResult) => {
          if (res.data && res.data !== this.state.primaryColor) {
            this.setState({ primaryColor: res.data });
            localStorage.setItem(this.props.themeColor, res.data);
            window.less
              .modifyVars({
                '@primary-color': res.data,
                '@link-color': res.data,
                '@btn-primary-bg': res.data,
              })
              .then(() => {})
              .catch((error: any) => {
                message.error('主题初始化失败！');
              });
          }
          if (res.code !== 0) {
            message.error(res.msg);
          }
        });
      })
      .catch((error: any) => {
        message.error('主题初始化失败！');
      });
  }
  public togglerContent = () => {
    const { collapse } = this.state;
    this.setState({ collapse: !collapse });
  };
  public changeSetting = (key: string, value: string) => {
    this.setState({ primaryColor: value });
    window.less
      .modifyVars({
        '@primary-color': value,
        '@link-color': value,
        '@btn-primary-bg': value,
      })
      .then(() => {
        localStorage.setItem(this.props.themeColor, value);
        http
          .put(`/upms/user/userconfig/color`, { color: value })
          .then((res: ResponseResult) => {
            if (res.code === 0) {
              message.success('更换主题成功！');
            }
          });
      })
      .catch((error: any) => {
        message.error('更换主题失败！');
      });
  };
  public render() {
    const { collapse } = this.state;
    return (
      <Drawer
        visible={collapse}
        width={300}
        onClose={this.togglerContent}
        placement="right"
        handler={
          <div
            className={`${styles.handle} bg-primary-color`}
            onClick={this.togglerContent}
          >
            <Icon
              type={collapse ? 'close' : 'setting'}
              style={{
                color: '#fff',
                fontSize: 20,
              }}
            />
          </div>
        }
        style={{
          zIndex: 999,
        }}
      >
        <ThemeColor
          title={'主题色'}
          value={this.state.primaryColor}
          onChange={(color: string) =>
            this.changeSetting('primaryColor', color)
          }
        />
      </Drawer>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    // themeColor: `themeColor_${state.auth.currentUserId}`,
    themeColor: `themeColor_1`,
  };
};
export default connect(mapStateToProps)(SettingDrawer);
