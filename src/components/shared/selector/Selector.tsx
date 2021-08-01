import {ReactElement, SyntheticEvent} from 'react';
import SelectorOption from '../selector-option/SelectorOption';
import './styles.scss';

interface SelectorProps {
  children: ReturnType<typeof SelectorOption> | ReturnType<typeof SelectorOption>[];
  title: string;
  onChange: (e: SyntheticEvent) => void;
  defaultValue?: string;
}

export default function Selector({title = '', onChange, children, defaultValue}: SelectorProps): ReactElement {
  return (
    <label className="selector">
      <span className="selector__title">{title}</span>
      <select className="selector__select" onChange={onChange} defaultValue={defaultValue}>
        {children}
      </select>
    </label>
  )
}
