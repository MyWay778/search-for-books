import {ReactElement} from 'react';
import './styles.scss';

interface SearchInputProps {
  placeholderText?: string;
}

export default function SearchInput ({placeholderText}: SearchInputProps): ReactElement {
  return (
    <div className="search-input">
      <input className="search-input__input" type="text" placeholder={placeholderText || ''}/>
      <button className="search-input__button"/>
    </div>
  )
}