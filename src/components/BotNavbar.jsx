
import {IoLocationOutline} from 'react-icons/io5'

 const BotNavbar = () => {
  return (
    <>
<nav
    className="relative flex w-full items-center justify-between h-[32px] bg-primary py-2 text-neutral-600 shadow-lg dark:text-neutral-300 dark:shadow-black/5 lg:flex-wrap lg:justify-start"
    data-te-botnav-ref>
    <div className="px-6">
      <button
        className="border-0 bg-transparent py-3 text-sm leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
        type="button"
        data-te-collapse-init
        data-te-target="#navbarSupportedContentY"
        aria-controls="navbarSupportedContentY"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="[&>svg]:w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-8 w-8">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </span>
      </button>
      <div
        className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
        id="navbarSupportedContentY"
        data-te-collapse-item>
        
          <li className="flex" data-te-nav-item-ref data-te-dropdown-ref>
            <a
              className="text-textw -mt-3 flex items-center whitespace-nowrap py-2 pr-2 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
              href="#" data-te-ripple-init data-te-ripple-color="light"
              type="button" id="dropdownMenuButtonX" data-te-dropdown-toggle-ref aria-expanded="false"
              data-te-nav-link-ref
              >Categories
              <span className="ml-4 w-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd" />
                </svg>
              </span>
              </a>
              <button className="text-textw text-sm pl-10 -mt-3 flex items-center px-2 ">
              <IoLocationOutline/>
                <span>Location</span>
            </button>
          </li>
          <div>  
            </div>
            <div>

          <ul className="list-style-none ml-60 -mt-3 flex flex-col lg:flex-row pl-[105px]" data-te-navbar-nav-ref>
    <button className="text-textw text-xs flex items-center px-2 py-2 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"href="#">
     <span>Groceries & Essentials</span>
    </button>
    <button className="text-textw text-xs flex items-center px-1 py-2 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"href="#">
     <span>Furnitures </span>
    </button>
    <button className="text-textw text-xs flex items-center px-1 py-2 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hovre:text-blue-500 "href="#">
     <span>Gadgets</span>
    </button> 
    <button className="text-textw text-xs flex items-center px-1 py-2 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"href="#">
     <span>Collectibles</span>
    </button>
    <button className="text-textw text-xs flex items-center px-1 py-2 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"href="#">
     <span>Jewelries</span>
    </button>
    <button className="text-textw text-xs flex items-center px-1 py-2 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500" href="#">
    <span>Sports</span>
    </button>
    <button className="text-textw text-xs flex items-center px-1 py-2 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500 "href="#">
     <span>Men</span>
    </button>
    <button className="text-textw text-xs flex items-center px-1 py-2 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"href="#">
     <span>Women</span>
    </button>
    <button className="text-textw text-xs flex items-center px-1 py-2 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500" href="#">
     <span>Babies</span>
    </button>
    <button className="text-textw text-xs flex items-center px-1 py-2 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"href="#">
     <span>Toys</span>
    </button>
    <button className="text-textw text-sm flex items-center px-1 py-2 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500" href="#" >
     <span>ShopLive</span>
    </button>

    </ul>
    </div>
</div>
      </div>
    </nav>
    </>
  );
};

export default BotNavbar;