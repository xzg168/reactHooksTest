import * as React from 'react';

import styles from './styles.css'

export default function Flip(props){
  return (
    <div className={styles.flipLayout} >
      <div className={styles.flipFront}>{props.front}</div>
      <div className={styles.flipBack}>{props.back}</div>
    </div>
  )
}