import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a className="text-3xl font-bold text-black font-cursive font-primary" href="#">
            Puppy Love
          </a>
          <button
            className="lg:hidden block text-black focus:outline-none"
            onClick={toggleNavbar}
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
              />
            </svg>
          </button>
        </div>
        <div className={`lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="lg:flex lg:justify-between lg:mx-auto">
            <li>
              <a className="block py-2 border-r-[10px] shadow-md shadow-black px-4 text-black hover:text-black uppercase" href="index.html">
                Home
              </a>
            </li>
            <li>
              <a className="block py-2 px-4 text-black hover:text-black" href="services.html">
                Services
              </a>
            </li>
            <li>
              <a className="block py-2 px-4 text-black hover:text-black" href="shop.html">
                Shop
              </a>
            </li>
            <li>
              <a className="block py-2 px-4 text-black hover:text-black" href="contact.html">
                Contact
              </a>
            </li>
          </ul>
          <form className="flex mt-4 lg:mt-0">
            <input
              className="px-2 py-1 border border-gray-400 rounded-l focus:outline-none"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="px-4 py-1 bg-gray-800 text-white rounded-r" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
