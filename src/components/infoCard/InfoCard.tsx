import * as React from 'react';
import Flip from '../flip/Flip';
import styles from './styles.css';
interface Props {
  title?: string;
  count?: number;
  icon?: any;
  backIcon?: any;
  backgroundColor?: string;
  onClick?: () => void;
  onGoDetail?: () => void;
  message?: string;
}
export default function InfoCard(props: Props) {
  const front = (
    <div
      className={styles.infoCardLayout}
      style={
        props.backgroundColor ? { backgroundColor: props.backgroundColor } : {}
      }
      onClick={
        (props.count && props.count > 0) || !props.count ? props.onClick : null
      }
    >
      <div className={styles.infoCardIcon}>{props.icon}</div>
      <div className={styles.infoCardContent}>
        {props.count ? (
          <div className={styles.infoCardCount}>{props.count}</div>
        ) : (
          ''
        )}
        <div className={styles.infoCardTitle}>{props.title}</div>
      </div>
    </div>
  );

  const back = (
    <div
      className={styles.infoCardLayout}
      style={
        props.backgroundColor ? { backgroundColor: props.backgroundColor } : {}
      }
    >
      <div className={styles.infoCardIcon} onClick={props.onClick}>
        {props.backIcon}
      </div>
      <div className={styles.infoCardContent}>
        <div className={styles.infoCardTitle} onClick={props.onGoDetail}>
          {props.message
            ? props.message.length > 20
              ? `${props.message.substr(0, 20)}...`
              : props.message
            : '暂无内容'}
        </div>
      </div>
    </div>
  );
  return (
    <Flip
      style={{
        width: '100%',
        height: '80px',
      }}
      front={front}
      back={back}
    />
  );
}
