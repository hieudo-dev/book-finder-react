import React from 'react';
import Layout from './components/layout';
import { SearchIcon } from './icons';

const BookCard = () => (
  <div className="flex md:block items-center bg-white p-4 my-2 md:mx-3 rounded-lg">
    <img
      className="w-20 md:w-40 md:w-full md:mb-2 object-contain object-center"
      src="https://dummyimage.com/723x403"
      alt="content"
    />
    <div className="block ml-4 md:ml-2">
      <div className="tracking-widest text-indigo-500 text-xs font-medium title-font">
        Author
      </div>
      <div className="text-sm md:text-base text-gray-900 font-medium title-font mb-2">
        Book title
      </div>
      <p className="relative h-24 overflow-hidden text-sm md:text-base">
        <span
          className="absolute"
          style={{
            width: '100%',
            height: '110%',
            background:
              'linear-gradient(to bottom, rgba(255,255,255,0),#ffffff)',
          }}
        />
        Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon
        disrupt edison bulbche. Fingerstache flexitarian street art 8-bit
        waistcoat. Distillery hexagon disrupt edison bulbche. Fingerstache
        flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt
        edison bulbche. Fingerstache flexitarian street art 8-bit waistcoat.
        Distillery hexagon disrupt edison bulbche.
      </p>
    </div>
  </div>
);

function App() {
  return (
    <Layout>
      <section>
        <form className="w-full sm:max-w-xl mx-auto" method="GET">
          <div className="relative w-full text-gray-600 focus-within:text-gray-400 ">
            <input
              type="search"
              className="w-full py-3 text-sm text-white bg-gray-900 rounded-md pl-4 pr-10 
            focus:outline-none focus:shadow-outline focus:bg-white focus:text-gray-900"
              placeholder="Search books..."
              autoComplete="off"
            />
            <span className="absolute inset-y-0 right-0 flex items-center">
              <button
                type="submit"
                className="p-3 focus:outline-none focus:shadow-outline"
              >
                <SearchIcon className="w-6 h-6" />
              </button>
            </span>
          </div>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center gap-3 pt-12">
          {[...Array(10).keys()].map((e) => (
            <BookCard key={e} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default App;
