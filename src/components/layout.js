import React from 'react';
import { MenuIcon, CloseIcon } from '../icons';

const NavLink = ({ link, text }) => (
  <a
    href={link}
    className="text-white pt-3 pb-2 px-2 sm:mx-2 border-b-2 border-gray-900
     hover:bg-gray-100 hover:text-gray-900 hover:border-gray-600"
  >
    {text}
  </a>
);

const Layout = ({ children }) => (
  <>
    <header>
      <nav className="bg-gray-900 shadow-md">
        <div className="sm:flex items-center justify-between px-4 py-1 sm:pl-8 sm:pr-4">
          <div className="flex justify-between items-center">
            <div className="py-1 text-xl font-medium text-white">
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
            <NavLink href="#" text="Home" />
            <NavLink href="#" text="About" />
            <NavLink href="#" text="Contact" />
          </div>
        </div>
      </nav>
    </header>
    <main>{children}</main>
    <footer></footer>
  </>
);

export default Layout;
