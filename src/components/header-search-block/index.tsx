import {ReactElement} from 'react';
import SearchInput from '../shared/search-input';
import './styles.scss';

export default function HeaderSearchBlock (): ReactElement {
  return (
    <div className="header__header-search-block">
      <SearchInput placeholderText="Search book"/>
    </div>
  )
}