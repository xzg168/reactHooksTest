import * as React from 'react';
import {Badge} from 'antd';
import styles from './styles.css'
interface Props {
  count?:number;
  icon?:any;
  title?:string;
  backgroundColor?:string;
  onClick?:()=>void;
}
export default function LinkCard(props:Props){
    return(
      <div className={styles.linkCardLayout}
         style={props.backgroundColor?{backgroundColor:props.backgroundColor}:{}}
         onClick={props.onClick}
      >
         <div className={styles.badgeContent}
      >
        {props.count?<Badge count={props.count}/>:''}
      </div>
         <div className={styles.linkCardIcon}>
              {props.icon}
         </div>
         <div className={styles.linkCardTitle}>{props.title}</div>
      </div>
    )
}