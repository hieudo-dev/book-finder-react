import React from 'react';

const PageLink = ({ current, disabled, children, onClick }) => (
  <li>
    <button
      className={`font-bold mx-1 px-3 py-2 bg-gray-900 ${
        disabled
          ? 'text-gray-800 cursor-not-allowed'
          : `${
              current ? 'text-white font-extrabold' : 'text-gray-600'
            } hover:bg-gray-700 hover:text-gray-200 active:bg-gray-800 cursor-pointer 
            focus:outline-none focus:shadow-outline hover:bg-gray-700 transition-colors duration-300`
      } rounded-lg `}
      onClick={onClick}
    >
      {children}
    </button>
  </li>
);

const PageNavigation = ({ currentPage, lastPage, onNavigate }) => (
  <nav>
    <ul className="flex justify-center pt-12">
      <PageLink
        onClick={() => onNavigate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </PageLink>
      {currentPage - 2 > 0 && (
        <PageLink onClick={() => onNavigate(currentPage - 2)}>
          {currentPage - 2}
        </PageLink>
      )}
      {currentPage - 1 > 0 && (
        <PageLink onClick={() => onNavigate(currentPage - 1)}>
          {currentPage - 1}
        </PageLink>
      )}
      <PageLink current={true}>{currentPage}</PageLink>
      {currentPage + 1 <= lastPage && (
        <PageLink onClick={() => onNavigate(currentPage + 1)}>
          {currentPage + 1}
        </PageLink>
      )}
      {currentPage + 2 <= lastPage && (
        <PageLink onClick={() => onNavigate(currentPage + 2)}>
          {currentPage + 2}
        </PageLink>
      )}
      <PageLink
        onClick={() => onNavigate(currentPage + 1)}
        disabled={currentPage === lastPage}
      >
        Next
      </PageLink>
    </ul>
  </nav>
);

export default PageNavigation;
