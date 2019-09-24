import * as React from 'react';
import { Tooltip, Icon } from 'antd';
const styles = require('./ThemeColor.css');

const Tag = ({
  color,
  check,
  ...rest
}: {
  color: string;
  className: string;
  check: boolean;
  onClick: () => void;
}) => (
  <div
    {...rest}
    style={{
      backgroundColor: color,
    }}
  >
    {check ? <Icon type="check" /> : ''}
  </div>
);

interface Props {
  colors?: object[];
  title: string;
  value: string;
  onChange: (color: string) => void;
}
const ThemeColor = ({ colors, title, value, onChange }: Props) => {
  let colorList = colors;
  if (!colors) {
    colorList = [
      {
        key: 'dust',
        color: '#F5222D',
        title: '薄暮',
      },
      {
        key: 'volcano',
        color: '#FA541C',
        title: '火山',
      },
      {
        key: 'sunset',
        color: '#FAAD14',
        title: '日暮',
      },
      {
        key: 'cyan',
        color: '#13C2C2',
        title: '明青',
      },
      {
        key: 'green',
        color: '#52C41A',
        title: '极光绿',
      },
      {
        key: 'daybreak',
        color: '#1890FF',
        title: '拂晓蓝',
      },
      {
        key: 'geekblue',
        color: '#2F54EB',
        title: '极客蓝',
      },
      {
        key: 'purple',
        color: '#722ED1',
        title: '酱紫',
      },
    ];
  }
  return (
    <div className={styles.themeColor}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>
        {colorList!.map(
          ({
            key,
            color,
            title,
          }: {
            key: string;
            color: string;
            title: string;
          }) => (
            <Tooltip key={key} title={title}>
              <Tag
                className={styles.colorBlock}
                color={color}
                check={value === color}
                onClick={() => onChange && onChange(color)}
              />
            </Tooltip>
          ),
        )}
      </div>
    </div>
  );
};

export default ThemeColor;
