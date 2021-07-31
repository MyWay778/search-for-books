import {ReactElement, SyntheticEvent} from 'react';
import './styles.scss';

interface SearchInputProps {
  inputValue: string;
  onChange: (e: SyntheticEvent) => void;
  onSubmit: () => void;
  placeholderText?: string;
  maxTextLength?: number;
  onKeyDown?: (e: SyntheticEvent) => void;
}

export default function SearchInput({inputValue, onChange, onSubmit, placeholderText, maxTextLength, onKeyDown}: SearchInputProps): ReactElement {

  return (
    <div className="search-input">
      <input className="search-input__input" type="text" value={inputValue} onKeyDown={onKeyDown} onChange={onChange} placeholder={placeholderText || ''}
             maxLength={maxTextLength || 200}/>
      <button className="search-input__button" onClick={onSubmit}/>
    </div>
  )
};
