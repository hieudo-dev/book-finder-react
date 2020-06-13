import React from 'react';
import { MenuIcon, CloseIcon } from '../icons';
import { Link } from 'react-router-dom';

const NavLink = ({ href, text }) => (
  <Link
    to={href}
    className="text-white p-3 border-b-2 border-gray-800 
    hover:bg-gray-700 hover:border-blue-400
    transition-colors duration-300"
  >
    {text}
  </Link>
);

const Layout = ({ children }) => (
  <div className="min-h-screen bg-gray-800">
    <header>
      <nav className="bg-gray-900 shadow-md">
        <div className="sm:flex items-center justify-between px-4 py-1 sm:pl-8 sm:pr-4">
          <div className="flex justify-between items-center">
            <div className="py-1 text-xl font-medium text-white">
              <a href="#">Book Finder</a>
            </div>
            <div className="sm:hidden">
              <button type="button" className="focus:outline-none">
                <MenuIcon className="w-4 h-4 fill-current text-white" />
                {/* <CloseIcon className="w-4 h-4" /> */}
              </button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row hidden sm:block -mx-2">
            <NavLink text="Home" href="/" />
            <NavLink text="About" href="/about" />
          </div>
        </div>
      </nav>
    </header>
    <main className="px-4 md:px-12 py-12 w-full h-full">{children}</main>
    <footer></footer>
  </div>
);

export default Layout;
