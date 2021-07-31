import {ReactElement, ReactNode} from 'react';
import './styles.scss';

interface ContainerProps {
  children: HTMLElement | ReactNode;
}

export default function Container ({children}: ContainerProps): ReactElement {
  return (
    <div className="container">
      {children}
    </div>
  )
}
