import * as React from 'react';
import styles from './styles.css';
import { Button, Icon } from 'antd';
interface State {
  selectItem: string;
}
interface Props {
  tabList: object[];
  tabsCount: object[];
  handleChangeTab: (item: string) => void;
  handleOpenModal: () => void;
}
class Tabs extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectItem: '',
    };
  }
  // 父组件重传props时就会调用这个方法
  public componentWillReceiveProps(nextProps) {
    if (nextProps.tabList.length !== 0 && !this.state.selectItem) {
      this.setState({ selectItem: nextProps.tabList[0].value });
      this.props.handleChangeTab(nextProps.tabList[0].value);
    }
  }
  public changeTabSelect(selectValue) {
    this.setState({ selectItem: selectValue });
    this.props.handleChangeTab(selectValue);
  }
  public render() {
    return (
      <div className={styles.tabsContent}>
        <div className={styles.tabsItemList}>
          {this.props.tabList.map((item, index) => {
            return (
              <span
                className={
                  item.value === this.state.selectItem
                    ? styles.tabsItemOn
                    : styles.tabsItem
                }
                key={index}
                onClick={() => this.changeTabSelect(item.value)}
              >
                <div style={{ position: 'relative' }}>
                  <span className={styles.tabsItemName}>
                    {item.label}
                    {this.props.tabsCount[item.value].count > 0 ? (
                      <span className={styles.tabsBage}>
                        {this.props.tabsCount[item.value].count}
                      </span>
                    ) : (
                      ''
                    )}
                  </span>
                </div>
              </span>
            );
          })}
        </div>
        <Button type="link" onClick={this.props.handleOpenModal}>
          <Icon type="plus" />
        </Button>
      </div>
    );
  }
}
export default Tabs;
