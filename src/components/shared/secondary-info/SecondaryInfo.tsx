import {ReactElement} from 'react';
import './styles.scss';
import clsx from 'clsx';

interface SecondaryInfoProps {
  infoText: string;
  mt?: 1;
}

export default function SecondaryInfo ({infoText = '', mt = 1}: SecondaryInfoProps): ReactElement {
  const secondaryInfoClass = clsx('secondary-info', mt && `secondary-info_margin-top-${mt}`);

  return (
    <div className={secondaryInfoClass}>{infoText}</div>
  )
}