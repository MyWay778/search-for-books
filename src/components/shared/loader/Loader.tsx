import {ReactElement} from 'react';
import clsx from 'clsx';
import './styles.scss';

interface LoaderProps {
  color?: 'gray';
  size?: 's';
}

export default function Loader({color = 'gray', size = 's'}:LoaderProps): ReactElement {
  const LoaderClass = clsx('loader', `loader_color-${color}`, `loader_size-${size}`);

  return (
    <div className={LoaderClass}>
      <div className="loader__arc"></div>
      <div className="loader__arc"></div>
      <div className="loader__arc"></div>
    </div>
  )
}
