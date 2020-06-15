import React, { useState } from 'react';
import { MenuIcon, CloseIcon, HomeIcon, InfoIcon, GitHubIcon } from '../icons';
import { Link } from 'react-router-dom';

const NavLink = ({ href, children }) => (
  <Link
    to={href}
    className="text-white p-3 sm:border-b-2 sm:border-gray-900 
    hover:bg-gray-700 hover:border-blue-400
    transition-colors duration-300"
  >
    <div className="flex flex-row items-center">{children}</div>
  </Link>
);

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-800">
      <header>
        <nav className="bg-gray-900 shadow-md">
          <div className="sm:flex items-center justify-between sm:pl-4">
            <div className="flex justify-end items-center p-2 sm:py-0">
              <div className="absolute w-full sm:relative text-center sm:text-start text-xl font-bold text-white ml-1 py-1">
                <span className="cursor-default">Book Finder</span>
              </div>
              <div className="mt-1 z-10 sm:hidden">
                <button
                  type="button"
                  className="focus:outline-none"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {!isOpen ? (
                    <MenuIcon className="w-6 h-6 fill-current text-white" />
                  ) : (
                    <CloseIcon className="w-6 h-6 fill-current text-white" />
                  )}
                </button>
              </div>
            </div>
            <div
              className={`${
                isOpen ? 'flex flex-col' : 'hidden'
              } sm:flex sm:flex-row`}
            >
              <a
                href="https://github.com/hdn7/book-finder-react"
                className="text-white p-3 sm:border-b-2 sm:border-gray-900 
                hover:bg-gray-700 hover:border-blue-400
                transition-colors duration-300"
              >
                <div className="flex flex-row items-center">
                  <GitHubIcon className="mt-1 w-5 h-5" />
                  <span className="mt-1 ml-2 sm:hidden">GitHub Page</span>
                </div>
              </a>
              <NavLink href="/">
                <HomeIcon className="mt-1 w-5 h-5" />
                <span className="mt-1 ml-2 sm:hidden">Home</span>
              </NavLink>
              <NavLink href="/about">
                <InfoIcon className="mt-1 w-5 h-5" />
                <span className="mt-1 ml-2 sm:hidden">About</span>
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
      <main className="px-4 md:px-12 py-12 w-full h-full">{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
