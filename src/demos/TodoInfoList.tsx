import * as React from 'react';
import CustomTabs from '../components/customTabs/CustomTabs';
//table标题
const columns = [
  {
    title: '缓急',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '文件类型',
    dataIndex: 'filetype',
    key: 'type',
    //render: (text) => <a>{text}</a>,
  },
  {
    title: '标题',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '主办部门',
    dataIndex: 'dept',
    key: 'dept',
  },
  {
    title: '送达时间',
    dataIndex: 'time',
    key: 'time',
  },
];
//弹窗配置tab项
const tabsConfigOptions = [
  { label: '全部', value: 'all' },
  { label: '公文', value: 'archive' },
  { label: '通知', value: 'notice' },
  { label: '会议', value: 'huiyi' },
  { label: '值班', value: 'zhiban' },
  { label: '督办', value: 'duban' },
];

class TodoInfoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {
        all: {
          items: [],
          count: 0,
        },
        archive: {
          items: [],
          count: 0,
        },
        notice: {
          items: [],
          count: 0,
        },
        huiyi: {
          items: [],
          count: 0,
        },
        zhiban: {
          items: [],
          count: 0,
        },
        duban: {
          items: [],
          count: 0,
        },
      },
    };
  }
  public componentDidMount() {
    this.setState({
      items: {
        all: {
          items: [
            {
              key: '1',
              name: '测试局通知发布记录',
              dept: '综合处',
              type: 'New York No. 1 Lake Park',
              status: '一般',
              time: '2019-01-11',
              filetype: '局厅工作通知',
            },
            {
              key: '2',
              name: '测试局通知发布记录',
              dept: '综合处',
              type: 'New York No. 1 Lake Park',
              status: '一般',
              time: '2019-01-11',
              filetype: '局厅工作通知',
            },
            {
              key: '3',
              name: '测试局通知发布记录',
              dept: '综合处',
              type: 'New York No. 1 Lake Park',
              status: '一般',
              time: '2019-01-11',
              filetype: '局厅工作通知',
            },
            {
              key: '4',
              name: '测试局通知发布记录',
              dept: '综合处',
              type: 'New York No. 1 Lake Park',
              status: '一般',
              time: '2019-01-11',
              filetype: '局厅工作通知',
            },
            {
              key: '5',
              name: '测试局通知发布记录',
              dept: '综合处',
              type: 'New York No. 1 Lake Park',
              status: '一般',
              time: '2019-01-11',
              filetype: '局厅工作通知',
            },
            {
              key: '6',
              name: '测试局通知发布记录',
              dept: '综合处',
              type: 'New York No. 1 Lake Park',
              status: '一般',
              time: '2019-01-11',
              filetype: '局厅工作通知',
            },
            {
              key: '7',
              name: '测试局通知发布记录',
              dept: '综合处',
              type: 'New York No. 1 Lake Park',
              status: '一般',
              time: '2019-01-11',
              filetype: '局厅工作通知',
            },
            {
              key: '8',
              name: '测试局通知发布记录',
              dept: '综合处',
              type: 'New York No. 1 Lake Park',
              status: '一般',
              time: '2019-01-11',
              filetype: '局厅工作通知',
            },
          ],
          count: 3,
        },
        archive: {
          items: [],
          count: 0,
        },
        notice: {
          items: [
            {
              key: '1',
              name: '测试局通知发布记录',
              dept: '综合处',
              type: 'New York No. 1 Lake Park',
              status: '一般',
              time: '2019-01-11',
              filetype: '局厅工作通知',
            },
          ],
          count: 1,
        },
        huiyi: {
          items: [],
          count: 0,
        },
        zhiban: {
          items: [],
          count: 0,
        },
        duban: {
          items: [],
          count: 0,
        },
      },
    });
  }
  public changePageSize(heightLevel) {
    console.log('heightLevel', heightLevel);
  }
  public onRowClick(rowObject) {
    console.log('rowObject', rowObject);
    alert('点击' + rowObject.key);
  }
  public render() {
    return (
      <>
        <CustomTabs
          tabTitle="待办中心"
          columns={columns}
          tabsConfigOptions={tabsConfigOptions}
          data={this.state.items}
          changePageSize={(params: number) => this.changePageSize(params)}
          onRowClick={(rowObject) => this.onRowClick(rowObject)}
        />
      </>
    );
  }
}

export default TodoInfoList;
