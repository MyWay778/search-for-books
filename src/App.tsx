import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import './App.css';
import {Header, HeaderSearchBlock, HeaderTitle} from './components';
import './styles/styles.scss';
import SearchResult from './pages/search-result/SearchResult';
import InfoPage from './pages/info/InfoPage';

function App() {
  return (
    <>
      <Header>
        <Link className='inner-link' to='/'>
          <HeaderTitle titleText="Search for books"/>
        </Link>
        <HeaderSearchBlock/>
      </Header>
      <Switch>
        <Route path="/" exact>
          <InfoPage/>
        </Route>
        <Route path="/results">
          <SearchResult/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
