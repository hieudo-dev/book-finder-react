import React from 'react';
import Layout from './components/layout';
import BookList from './components/bookList';
import About from './components/about';

function App() {
  return (
    <Layout>
      {/* <About /> */}
      <BookList />
    </Layout>
  );
}

export default App;
