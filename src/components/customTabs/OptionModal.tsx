import * as React from 'react';
import { Modal, Checkbox } from 'antd';
interface State {
  checkedList: object[];
}
interface Props {
  tabList: object[];
  visible: boolean;
  onClose: () => void;
  onOk: (params: object[]) => void;
  tabsConfigOptions: object[];
}
class OptionModal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      checkedList: [],
    };
  }
  public componentWillReceiveProps(nextProps) {
    const { tabList } = nextProps;
    if (tabList.length > 0) {
      this.setState({ checkedList: tabList });
    }
  }
  public onChange = (e: any) => {
    const checkedVal = e.target.value;
    const temCheckedList = this.state.checkedList;
    if (e.target.checked) {
      temCheckedList.push(checkedVal);
      this.setState({ checkedList: temCheckedList });
    } else {
      const index = temCheckedList.indexOf(checkedVal);
      temCheckedList.splice(index, 1);
      this.setState({ checkedList: temCheckedList });
    }
  };
  public handleOk = () => {
    this.props.onOk(this.state.checkedList);
  };
  public render() {
    return (
      <Modal
        title="选项卡配置"
        visible={this.props.visible}
        onOk={this.handleOk}
        onCancel={this.props.onClose}
        width={250}
      >
        {this.props.tabsConfigOptions.map((item, index) => {
          let output =
            this.props.tabList &&
            this.props.tabList.find((item1, index, arry) => {
              return item.value === item1.value;
            });
          return (
            <div key={index}>
              <Checkbox
                value={item}
                onChange={this.onChange}
                defaultChecked={output ? true : false}
              >
                {item.label}
              </Checkbox>
            </div>
          );
        })}
      </Modal>
    );
  }
}

export default OptionModal;
