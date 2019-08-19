import * as React from 'react';
import { Button, Steps } from 'antd';
import styles from './test.css';
const { Step } = Steps;
class Test extends React.Component {
  render() {
    console.log('styles', styles);
    return (
      <div className={styles.test}>
        <Steps current={1}>
          <Step title="Finished" description="This is a description." />
          <Step title="In Progress" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>
        <Button type="primary">点击</Button>
      </div>
    );
  }
}

export default Test;
