import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import './App.css';
import {Header, HeaderSearchBlock, HeaderTitle} from './components';
import './styles/styles.scss';
import SearchResult from './pages/search-result/SearchResult';
import InfoPage from './pages/info/InfoPage';
import BookPage from './pages/book/BookPage';

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
        <Route path="/" exact component={InfoPage}/>
        <Route path="/results" component={SearchResult}/>
        <Route path="/book/:bookId" component={BookPage}/>
      </Switch>
    </>
  );
}

export default App;
