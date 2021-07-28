import React from 'react';
import './App.css';
import Header from './components/header';
import HeaderTitle from './components/header-title';
import './styles/styles.scss';
import HeaderSearchBlock from './components/header-search-block';

function App() {
  return (
    <>
      <Header>
        <HeaderTitle titleText="Search for books"/>
        <HeaderSearchBlock/>
      </Header>
    </>
  );
}

export default App;
