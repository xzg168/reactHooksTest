import * as React from 'react';
import { lazy } from 'react';
// const CreatePopover = lazy(() => import('./CreatePopover'));
import CreatePopover from './CreatePopover';
interface State {
  detailShow: string;
  x: number;
  y: number;
}
interface Props {
  placement: string;
  title: string;
  trigger: string;
}
const offsetCount = 5;
class Popover extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      detailShow: 'none',
      x: 0,
      y: 0,
    };
  }
  public setPosition(e) {
    // console.log('实际宽度', e.target.offsetWidth); //实际宽度
    // console.log('实际高度', e.target.offsetHeight); //实际高度
    // console.log('left', e.target.getBoundingClientRect().left);
    // console.log('top', e.target.getBoundingClientRect().top);
    // console.log('right', e.target.getBoundingClientRect().right);
    // console.log('bottom', e.target.getBoundingClientRect().bottom);
    let x = 0;
    let y = 0;
    const { placement } = this.props;
    if (placement === 'bottom') {
      x = e.target.getBoundingClientRect().left + e.target.offsetWidth / 2;
      y =
        e.target.getBoundingClientRect().top +
        e.target.offsetHeight +
        offsetCount;
    } else if (placement === 'left') {
      x = e.target.getBoundingClientRect().left - offsetCount;
      y = e.target.getBoundingClientRect().top + e.target.offsetHeight / 2;
    } else if (placement === 'top') {
      x = e.target.getBoundingClientRect().left + e.target.offsetWidth / 2;
      y = e.target.getBoundingClientRect().top - offsetCount;
    } else if (placement === 'right') {
      x = e.target.getBoundingClientRect().right + offsetCount;
      y = e.target.getBoundingClientRect().top + e.target.offsetHeight / 2;
    }
    this.setState({
      detailShow: 'block',
      x,
      y,
    });
  }
  public handleMouseEnter = (e) => {
    console.log('handleMouseEnter', e.target);
    e.stopPropagation();
    const { trigger } = this.props;
    if (trigger === 'click') {
      return;
    }
    this.setPosition(e);
  };
  public handleMouseLeave = (e) => {
    console.log('handleMouseLeave');
    e.stopPropagation();
    const { trigger } = this.props;
    if (trigger === 'click') {
      return;
    }
    this.setState({
      detailShow: 'none',
      x: 0,
      y: 0,
    });
  };
  public handleClick = (e) => {
    e.stopPropagation();
    const { trigger } = this.props;
    if (trigger !== 'click') {
      return;
    }
    this.setPosition(e);
  };
  public outDivClickHandler = (e) => {
    e.stopPropagation();
    const target = e.target;
    const node = this.myRef.current;
    if (node && !node.contains(target)) {
      this.setState({
        detailShow: 'none',
        x: 0,
        y: 0,
      });
    }
  };
  public componentDidMount() {
    document.addEventListener('click', this.outDivClickHandler);
  }
  public componentWillUnmount() {
    document.removeEventListener('click', this.outDivClickHandler);
  }

  public render() {
    const newPrpos = {};
    Object.assign(newPrpos, this.state, this.props);
    return (
      <div
        ref={this.myRef}
        style={{ display: 'inline-block' }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.handleClick}
      >
        <CreatePopover {...newPrpos} />
        {this.props.children}
      </div>
    );
  }
}

export default Popover;
