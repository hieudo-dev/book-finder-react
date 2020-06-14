import React, { useState } from 'react';
import { MenuIcon, CloseIcon } from '../icons';
import { Link } from 'react-router-dom';

const NavLink = ({ href, text }) => (
  <Link
    to={href}
    className="text-white p-3 sm:border-b-2 sm:border-gray-800 
    hover:bg-gray-700 hover:border-blue-400
    transition-colors duration-300"
  >
    {text}
  </Link>
);

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-800">
      <header>
        <nav className="bg-gray-900 shadow-md">
          <div className="sm:flex items-center justify-between p-1 sm:pl-8">
            <div className="flex justify-between items-center">
              <div className="ml-2 sm:ml-1 py-1 text-xl font-bold text-white">
                <span className="cursor-default">Book Finder</span>
              </div>
              <div className="sm:hidden">
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
            <div className={`${isOpen ? 'flex flex-col' : 'hidden'} sm:block`}>
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
};

export default Layout;
