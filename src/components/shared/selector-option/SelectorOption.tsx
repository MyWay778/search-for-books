import {ReactElement} from 'react';
import './styles.scss';

interface SelectorOptionProp {
  value: string;
  title: string;
}

export default function SelectorOption({value, title}: SelectorOptionProp): ReactElement {
  return (
    <option className="selector-option" value={value}>
      {title}
    </option>
  )
}
