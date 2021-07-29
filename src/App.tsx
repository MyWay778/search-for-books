import React from 'react';
import './App.css';
import {Header, HeaderSearchBlock, HeaderTitle} from './components';
import './styles/styles.scss';

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
