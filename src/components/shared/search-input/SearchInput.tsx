import {ReactElement} from 'react';
import './styles.scss';

interface SearchInputProps {
  inputValue: string;
  onChange: (e: React.SyntheticEvent) => void;
  onSubmit: () => void;
  placeholderText?: string;
  maxTextLength?: number;
}

export default function SearchInput({inputValue, onChange, onSubmit, placeholderText, maxTextLength}: SearchInputProps): ReactElement {

  return (
    <div className="search-input">
      <input className="search-input__input" type="text" value={inputValue} onChange={onChange} placeholder={placeholderText || ''}
             maxLength={maxTextLength || 200}/>
      <button className="search-input__button" onClick={onSubmit}/>
    </div>
  )
};
