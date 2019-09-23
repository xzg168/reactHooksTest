import * as React from 'react';
import styles from './styles.css';
interface Props {
  count?: number;
  icon?: any;
  title?: string;
  backgroundColor?: string;
  onClick?: () => void;
}
export default function LinkCard(props: Props) {
  return (
    <div
      className={styles.linkCardLayout}
      style={
        props.backgroundColor ? { backgroundColor: props.backgroundColor } : {}
      }
      onClick={props.onClick}
    >
      <div className={styles.badgeContent}>
        {props.count ? (
          <span className={styles.infoCardBage}>{props.count}</span>
        ) : (
          '1'
        )}
      </div>
      <div className={styles.linkCardIcon}>{props.icon}</div>
      <div className={styles.linkCardTitle}>{props.title}</div>
    </div>
  );
}
