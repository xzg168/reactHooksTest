import * as React from 'react';
import styles from './styles.css';
import { Table, Icon } from 'antd';
import OptionModal from './OptionModal';
import Tabs from './Tabs';

interface State {
  visible: boolean;
  heightLevel: number;
  tabList: object[];
  items: object[];
}
interface Props {
  tabTitle: string;
  columns: object[];
  tabsConfigOptions: object[];
  data: object[];
  onRowClick?: (parmas: object) => void;
}
class CustomTabs extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      visible: false,
      tabList: [],
      items: [],
      heightLevel: 1,
    };
  }
  public componentDidMount() {
    const temList = localStorage.getItem('tabList');
    if (temList) {
      this.setState({
        tabList: JSON.parse(temList),
      });
    }
  }
  public changeTabData(changeItem: string) {
    this.setState({ items: this.props.data[changeItem].items });
  }
  public handleOpenModal = () => {
    this.setState({ visible: true });
  };
  public handleCancle = () => {
    this.setState({ visible: false });
  };
  public handleOk = (checkVal: object[]) => {
    this.setState({ tabList: checkVal, visible: false });
    localStorage.setItem('tabList', JSON.stringify(checkVal));
  };
  public handleIconClick = () => {
    const level = this.state.heightLevel === 2 ? 1 : 2;
    this.setState({ heightLevel: level });
    this.props.changePageSize(level);
  };
  public onRowClick = (record) => {
    console.log('record', record);
    this.props.onRowClick(record);
  };
  public render() {
    return (
      <div className={styles.customTabs}>
        <div className={styles.tabsTitleContent}>
          <div className={styles.tabsTitle}>{this.props.tabTitle}</div>
          <Tabs
            handleOpenModal={this.handleOpenModal}
            tabList={this.state.tabList}
            handleChangeTab={(changeItem: string) =>
              this.changeTabData(changeItem)
            }
            tabsCount={this.props.data}
          />
        </div>
        <Table
          className={
            this.state.heightLevel === 1 ? styles.tabstable : styles.tabstable2
          }
          style={{ overflow: 'hidden' }}
          columns={this.props.columns}
          dataSource={this.state.items}
          pagination={false}
          onRow={(record) => {
            return {
              onClick: this.onRowClick.bind(this, record),
            };
          }}
        />
        <div className={styles.expandIcon}>
          <Icon
            type={this.state.heightLevel === 1 ? 'down' : 'up'}
            onClick={this.handleIconClick}
          />
        </div>
        <OptionModal
          visible={this.state.visible}
          onClose={this.handleCancle}
          onOk={this.handleOk}
          tabList={this.state.tabList}
          tabsConfigOptions={this.props.tabsConfigOptions}
        />
      </div>
    );
  }
}

export default CustomTabs;
