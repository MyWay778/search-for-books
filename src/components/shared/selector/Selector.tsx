import {ReactElement} from 'react';
import SelectorOption from '../selector-option/SelectorOption';
import './styles.scss';

interface SelectorProps {
  children: ReturnType<typeof SelectorOption> | ReturnType<typeof SelectorOption>[];
  title: string;
}

export default function Selector({title = '', children}: SelectorProps): ReactElement {
  return (
    <label className="selector">
      <span className="selector__title">{title}</span>
      <select className="selector__select">
        {children}
      </select>
    </label>
  )
}
