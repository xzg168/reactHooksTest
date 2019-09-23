import React from 'react';
import { Icon, Row, Col } from 'antd';
import InfoCard from '../components/infoCard/InfoCard';
import LinkCard from '../components/linkCard/LinkCard';
import Flip from '../components/flip/Flip';

class EmailInfoCard extends React.Component {
  public render() {
    const TemIcon = <Icon type="taobao-circle" style={{ fontSize: 40 }} />;
    const TemIconBack = (
      <Icon type="taobao-circle" style={{ fontSize: 40, color: 'yellow' }} />
    );
    const TemIcon1 = <Icon type="wechat" style={{ fontSize: 40 }} />;
    const TemIcon2 = <Icon type="form" style={{ fontSize: 30 }} />;
    return (
      <Row gutter={8}>
        <Col span={6}>
          <InfoCard
            count={1}
            title={'我的淘宝'}
            icon={TemIcon}
            backIcon={TemIconBack}
            backgroundColor="red"
            onClick={() => alert('跳')}
            onGoDetail={() => alert('onGoDetail')}
            message="优秀"
          />
        </Col>
        <Col span={8}>
          <InfoCard
            count={9}
            title={'我的微信'}
            icon={TemIcon1}
            backgroundColor="#09BB07"
          />
        </Col>
        <Col span={4}>
          <LinkCard
            title={'起草'}
            icon={TemIcon2}
            count={1}
            backgroundColor={'#6D79E8'}
            onClick={() => alert('go')}
          />
        </Col>
        <Col span={4}>
          <Icon
            type="taobao-circle"
            className="primary-color"
            style={{ fontSize: 40 }}
          />
        </Col>
      </Row>
    );
  }
}

export default EmailInfoCard;
