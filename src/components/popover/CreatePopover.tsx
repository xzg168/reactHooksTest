import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styles from './styles.css';
function CreatePopover(props) {
  //console.log('props', props);
  const { placement } = props;
  const classPlacement = `popover-placement-${placement}`;
  const stopPop = (e) => {
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();
  };
  return ReactDOM.createPortal(
    <div
      className={`${styles.popover} ${styles[classPlacement]}`}
      style={{
        display: props.detailShow,
        left: props.x,
        top: props.y,
      }}
      onClick={(e) => stopPop(e)}
      //onMouseLeave={(e) => stopPop(e)}
      //onMouseEnter={(e) => stopPop(e)}
    >
      <div>
        <div className={styles.popoverArrow} />
        <div className={styles.popoverTitle}>{props.title}</div>
        <div className={styles.popoverContent}>{props.content}</div>
      </div>
    </div>,
    document.getElementsByTagName('body')[0],
  );
}

export default CreatePopover;
