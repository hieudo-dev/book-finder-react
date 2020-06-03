import React from 'react';
import Layout from './components/layout';
import { SearchIcon } from './icons';

function App() {
  return (
    <Layout>
      <form className="w-full sm:max-w-xl" method="GET">
        <div className="relative w-full text-gray-600 focus-within:text-gray-400 ">
          <input
            type="search"
            className="w-full py-2 text-sm text-white bg-gray-900 rounded-md pl-4 pr-10 
              focus:outline-none focus:shadow-outline focus:bg-white focus:text-gray-900"
            placeholder="Search books..."
            autoComplete="off"
          />
          <span className="absolute inset-y-0 right-0 flex items-center">
            <button
              type="submit"
              className="p-1 focus:outline-none focus:shadow-outline"
            >
              <SearchIcon className="w-6 h-6" />
            </button>
          </span>
        </div>
      </form>
    </Layout>
  );
}

export default App;
