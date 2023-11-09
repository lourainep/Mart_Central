import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '/src/assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-secondary flex flex-row md:flex-row justify-center items-center space-between h-[90px]">
      <div className="md:ml-2.5 md:mt-10">
        <span className="hidden md:block lg:hidden text-textw">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </span>
      </div>

      <div className="object-cover md:ml-10 md:mr-20">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="hidden md:block lg:block md:text-2xl lg:text-2xl h-[80px] w-[100px]"
          />
        </Link>
      </div>

      <div className="md:mb-10 md:px-10 md:w-1/2 lg:w-[850px] xs:hidden">
        <div className="md:w-4/5">
          <div className="rounded-lg bg-textw">
            <form className="flex flex-row justify-between">
              <input
                type="search"
                placeholder="Sign up and get up to 100% discount on your first order"
                className="text-sm h-10 lg:w-4/5 md:w-99 rounded-full lg:mr-1"
              />
              <span className="text-primary lg:w-5 mt-3">
                <AiOutlineSearch />
              </span>
            </form>
          </div>
        </div>
      </div>

      <div className="flex md:flex-wrap items-center md:mt-10 gap-1">
        <ul className="flex flex-row gap-2 text-textw">
          <Link to="/Wishlist">
            <li className="md:block px-3 flex flex-col">
              <span className=" md:block lg:block ">
                <AiOutlineHeart />
              </span>
              <span className='hidden md:block lg:block'>Wishlist</span>
            </li>
          </Link>
          <li className="ml-0 text-textw">
            <AiOutlineShoppingCart />
            <span className="hidden md:block lg:block">Cart</span>
          </li>
          <li className="mr-2 text-textw">
            <span className="text-2xl">
              <AiOutlineUser />
            </span>
            <span className="hidden md:block lg:block text-xs">
              <Link to ='/Login'>LOGIN</Link>

            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
