import React from 'react';
import { MenuIcon, CloseIcon } from '../icons';

const Layout = ({ children }) => (
  <div>
    <nav className="bg-white shadow-md">
      <div className="sm:flex items-center justify-between py-1 px-4 sm:px-8">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800 sm:text-xl">
            <a href="#">Book Finder</a>
          </div>
          <div className="sm:hidden">
            <button
              type="button"
              className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
            >
              <MenuIcon className="w-4 h-4" />
              {/* <CloseIcon className="w-4 h-4" /> */}
            </button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row hidden sm:block -mx-2">
          <a
            href="#"
            className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 sm:mx-2"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 sm:mx-2"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
    <div>{children}</div>
  </div>
);

export default Layout;
