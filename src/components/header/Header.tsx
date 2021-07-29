import {ReactElement, ReactNode} from 'react';
import './styles.scss';

interface HeaderProps {
  children: HTMLElement | ReactNode;
}

export default function Header ({children}: HeaderProps): ReactElement {
  return (
    <header className="header">
      <div className="header__container">
        {children}
      </div>
    </header>
  )
}