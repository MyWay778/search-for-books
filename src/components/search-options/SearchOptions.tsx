import {ReactElement} from 'react';
import Selector from '../shared/selector/Selector';
import SelectorOption from '../shared/selector-option/SelectorOption';
import './styles.scss';

export default function SearchOptions(): ReactElement {
  return (
    <div className="search-options">
      <Selector title="Categories">
        <SelectorOption value="all" title="all" selected/>
        <SelectorOption value="art" title="art"/>
        <SelectorOption value="biography" title="biography"/>
        <SelectorOption value="computers" title="computers"/>
        <SelectorOption value="history" title="history"/>
        <SelectorOption value="medical" title="medical"/>
        <SelectorOption value="poetry" title="poetry"/>
      </Selector>
      <Selector title="Sorting by">
        <SelectorOption value="relevance " title="relevance" selected/>
        <SelectorOption value="newest" title="newest"/>
      </Selector>
    </div>
  )
}
