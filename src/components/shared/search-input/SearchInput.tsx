import {ReactElement, SyntheticEvent, useState} from 'react';
import './styles.scss';

interface SearchInputProps {
  submitValue: (value: string) => void;
  placeholderText?: string;
  maxTextLength?: number;
}

export default function SearchInput({submitValue, placeholderText, maxTextLength}: SearchInputProps): ReactElement {
  const [inputValue, setInputValue] = useState<string>('');

  const changeHandler = (e: SyntheticEvent): void => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    setInputValue(value);
  }

  const submitHandler = (): void => {
    if (inputValue) {
      submitValue(inputValue);
    }
  }

  return (
    <div className="search-input">
      <input className="search-input__input" type="text" value={inputValue} onChange={changeHandler} placeholder={placeholderText || ''}
             maxLength={maxTextLength || 200}/>
      <button className="search-input__button" onClick={submitHandler}/>
    </div>
  )
}
