import {ReactElement} from 'react';
import './styles.scss';

interface HeaderTitleProps {
  titleText: string;
}

export default function HeaderTitle({titleText}: HeaderTitleProps): ReactElement {
  return (
    <h1 className="header__title-header">{titleText}</h1>
  )
}