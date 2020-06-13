import React from 'react';
import Layout from './components/layout';
import BookList from './components/bookList';
import About from './components/about';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <BookList />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
