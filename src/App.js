import React from 'react';
import Layout from './components/layout';

function App() {
  return (
    <Layout>
      <div className="container mx-auto justify-center">
        <header className="p-4 text-center">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Layout>
  );
}

export default App;
