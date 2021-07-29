import {ReactElement} from 'react';
import clsx from 'clsx';
import './styles.scss';

interface UnderlineInfoProps {
  infoText: string;
  mt?: 1 | 3;
}

export default function UnderlineInfo ({infoText, mt}: UnderlineInfoProps): ReactElement {
  const underlineInfoClass = clsx('underline-info', mt && `underline-info_margin-top-${mt}`);

  return (
    <div className={underlineInfoClass}>{infoText}</div>
  )
}
