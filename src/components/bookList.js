import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SearchIcon } from '../icons';
import axios from 'axios';
import _ from 'lodash';
import PageNavigation from './pageNavigation';

const BookSummary = ({ title, authors, description, thumbnail, link }) => {
  return (
    <a href={link}>
      <div
        className="flex flex-row items-center bg-white p-2 md:py-4 my-2 mx-2 rounded-lg
      transition-transform duration-300 ease-out transform hover:scale-105"
      >
        <img
          className="w-20 h-20 md:w-32 md:h-32 md:mb-2 object-scale-down object-center"
          src={thumbnail ? thumbnail : 'https://dummyimage.com/723x403'}
          alt="content"
        />
        <div className="flex flex-col ml-2 w-full overflow-hidden">
          <div className="tracking-widest text-indigo-500 text-xs font-medium title-font overflow-hidden truncate">
            {!authors?.length ? (
              <div className="italic">No authors</div>
            ) : (
              authors.join(', ')
            )}
          </div>
          <div className="text-xs md:text-base text-gray-900 font-medium title-font mb-2 truncate">
            {title}
          </div>
          <p className="relative h-24 md:h-32 overflow-hidden text-xs md:text-base">
            <span
              className="absolute"
              style={{
                width: '100%',
                height: '110%',
                background:
                  'linear-gradient(to bottom, rgba(255,255,255,0),#ffffff)',
              }}
            />
            {description ? (
              description
            ) : (
              <div className="text-xs text-gray-500 italic">No description</div>
            )}
          </p>
        </div>
      </div>
    </a>
  );
};

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [keywords, setKeywords] = useState('');
  const [pagingInfo, setPagingInfo] = useState({ currentPage: 1, lastPage: 0 });

  const debouncedFetch = _.debounce((page) => {
    const BOOKS_PER_PAGE = 10;
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          keywords
        )}&maxResults=${BOOKS_PER_PAGE}&startIndex=${
          (page - 1) * BOOKS_PER_PAGE
        }`
      )
      .then((response) => {
        setBooks(
          response.data.items.map((volume) => ({
            ...volume.volumeInfo,
            id: volume.id,
          }))
        );
        setPagingInfo({
          currentPage: page,
          lastPage: Math.ceil(response.data.totalItems / BOOKS_PER_PAGE),
        });
      });
  }, 100);

  const setCurrentPage = (page) => {
    setPagingInfo({ ...pagingInfo, currentPage: page });
    if (keywords) debouncedFetch(page);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (keywords) debouncedFetch(1);
  };

  return (
    <>
      <section>
        <form
          className="w-full sm:max-w-xl mx-auto"
          onSubmit={(e) => submitHandler(e)}
        >
          <div className="relative w-full text-gray-600 focus-within:text-gray-400 ">
            <input
              type="search"
              className="w-full py-3 text-sm text-white bg-gray-900 rounded-md pl-4 pr-10 
          focus:outline-none focus:shadow-outline focus:bg-white focus:text-gray-900
          transition-colors duration-300 hover:bg-gray-700"
              placeholder="Search books..."
              autoComplete="off"
              onChange={({ target: { value } }) => setKeywords(value)}
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
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-3 pt-12">
          {books.length !== 0 &&
            books.map((book) => (
              <motion.div
                key={book.id}
                positionTransition
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <BookSummary
                  title={book.title}
                  authors={book.authors}
                  description={book.description}
                  thumbnail={book.imageLinks?.thumbnail}
                  link={book.infoLink}
                />
              </motion.div>
            ))}
        </div>
      </section>
      {books.length !== 0 && (
        <PageNavigation
          currentPage={pagingInfo.currentPage}
          lastPage={pagingInfo.lastPage}
          onNavigate={setCurrentPage}
        />
      )}
    </>
  );
};

export default BookList;
