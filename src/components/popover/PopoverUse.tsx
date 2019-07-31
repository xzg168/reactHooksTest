import * as React from 'react';
import { Button, Row, Col } from 'antd';
// import {Suspense} from 'react'
import Popover from './Popover';
const content = (
  <div>
    <p>1</p>
    <p>2</p>
  </div>
);
class PopoverUse extends React.Component {
  public render() {
    return (
      // <Suspense fallback='...'>
      <div style={{ textAlign: 'center', marginTop: '200px' }}>
        <Row>
          <Col span={4}>
            <Popover content={content} title="底部弹出" placement="bottom">
              <Button type="primary">hover Me Bottom</Button>
            </Popover>
          </Col>
          <Col span={4}>
            <Popover content={content} title="顶部弹出" placement="top">
              <Button type="primary">hover Me Top</Button>
            </Popover>
          </Col>
          <Col span={4}>
            <Popover content={content} title="左边弹出" placement="left">
              <Button type="primary">hover Me Left</Button>
            </Popover>
          </Col>
          <Col span={4}>
            <Popover
              content={content}
              title="右边弹出"
              placement="right"
              trigger="click"
            >
              <Button type="primary">click Me Right</Button>
            </Popover>
          </Col>
        </Row>
      </div>
      // </Suspense>
    );
  }
}

export default PopoverUse;
