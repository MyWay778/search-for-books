import {ReactElement, SyntheticEvent} from 'react';
import './styles.scss';
import {Selector, SelectorOption} from '../shared';

interface SearchOptionsProps {
  selectCategoriesHandler: (e: SyntheticEvent) => void;
  selectSortingByHandler: (e: SyntheticEvent) => void;
}

export default function SearchOptions({selectCategoriesHandler, selectSortingByHandler}: SearchOptionsProps): ReactElement {
  return (
    <div className="search-options">
      <Selector title="Categories" onChange={selectCategoriesHandler} defaultValue="">
        <SelectorOption value="" title="all"/>
        <SelectorOption value="art" title="art"/>
        <SelectorOption value="biography" title="biography"/>
        <SelectorOption value="computers" title="computers"/>
        <SelectorOption value="history" title="history"/>
        <SelectorOption value="medical" title="medical"/>
        <SelectorOption value="poetry" title="poetry"/>
      </Selector>
      <Selector title="Sorting by" onChange={selectSortingByHandler} defaultValue="relevance">
        <SelectorOption value="relevance" title="relevance"/>
        <SelectorOption value="newest" title="newest"/>
      </Selector>
    </div>
  )
}
