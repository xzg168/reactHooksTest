import * as React from 'react';
import useUserList from './useUserList';
import { Table, Divider, Row, Col, Button, Input, Alert } from 'antd';
const { Search } = Input;

function UserList() {
  const userSource = useUserList('/local/user/list');
  return (
    <div>
      <h1>用户列表</h1>
      <Row>
        <Col span={4}>
          <Button type={'primary'} onClick={() => userSource.addItem()}>
            新建
          </Button>
        </Col>
        <Col span={4}>
          <Search
            placeholder="根据名字搜索"
            onSearch={(value) =>
              value ? userSource.searchByName(value) : userSource.reload()
            }
            enterButton
          />
        </Col>
      </Row>
      {userSource.erro ? (
        <div>
          <Alert message="获取数据失败" type="error" />
        </div>
      ) : (
        ''
      )}

      <Table
        loading={userSource.loading}
        rowKey="id"
        dataSource={userSource.dataSource}
        columns={[
          {
            title: '姓名',
            dataIndex: 'name',
          },
          {
            title: '年龄',
            dataIndex: 'age',
            sorter: true,
            defaultSortOrder: 'descend',
            // sortOrder: 'ascend',
            sortDirections: ['ascend', 'descend', 'ascend'],
          },
          {
            title: '职业',
            dataIndex: 'job',
          },
          {
            title: '住址',
            dataIndex: 'address',
          },
          {
            title: '操作',
            dataIndex: 'opt',
            render: (value: null, item) => {
              return (
                <div>
                  <a
                    href="javascript:;"
                    onClick={() => userSource.removeItem(item)}
                  >
                    删除
                  </a>
                  <Divider type="vertical" />
                  <a
                    href="javascript:;"
                    onClick={() => userSource.updateItem(item)}
                  >
                    修改
                  </a>
                </div>
              );
            },
          },
        ]}
      />
    </div>
  );
}
export default UserList;
