import {ReactElement} from 'react';
import './styles.scss';

interface SelectorOption {
  value: string;
  title: string;
}

export default function SelectorOption({value, title}: SelectorOption): ReactElement {
  return (
    <option className="selector-option" value={value}>
      {title}
    </option>
  )
}
