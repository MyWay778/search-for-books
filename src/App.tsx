import React from 'react';
import './App.css';
import {Header, HeaderSearchBlock, HeaderTitle} from './components';
import './styles/styles.scss';
import SearchResult from './pages/search-result/SearchResult';

function App() {
  return (
    <>
      <Header>
        <HeaderTitle titleText="Search for books"/>
        <HeaderSearchBlock/>
      </Header>
      <SearchResult/>
    </>
  );
}

export default App;
