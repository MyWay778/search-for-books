import {ReactElement, SyntheticEvent, useEffect, useState} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {setSearchQuery,cleanup} from '../../store/slices/booksSlice';
import {SearchInput} from '../shared';
import './styles.scss';
import {fetchBooks} from '../../store/slices/booksSlice';
import useAppDispatch from '../../hooks/useAppDispatch';
import Routes from '../../constants/routes';

export default function HeaderSearchBlock(): ReactElement {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const location = useLocation();
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    if (location.pathname === Routes.index) {
      setInputValue('');
      dispatch(cleanup());
    }
  }, [location])

  const changeSearchValueHandler = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    setInputValue(value);
  }

  const submitSearchQuery = () => {
    if(inputValue.trim()) {
      dispatch(setSearchQuery(inputValue));
      dispatch(fetchBooks());
      history.push(`${Routes.results}`);
    }
  }

  return (
    <div className="header__header-search-block" data-testid="header-search-block">
      <SearchInput inputValue={inputValue} onChange={changeSearchValueHandler} onSubmit={submitSearchQuery}
                   placeholderText="Search book" maxTextLength={100}/>
    </div>
  )
}
