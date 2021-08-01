import {ReactElement} from 'react';
import './styles.scss';

interface SelectorOption {
  value: string;
  title: string;
  selected?: boolean;
}

export default function SelectorOption({value, title, selected}: SelectorOption): ReactElement {
  return (
    <option className="selector-option" value={value} selected={selected}>
      {title}
    </option>
  )
}
