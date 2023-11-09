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
            className=" md:block lg:block md:text-2xl lg:text-2xl h-[80px] w-[100px]"
          />
        </Link>
      </div>

      <div className="md:mb-10 md:px-10 md:w-1/2 lg:w-[850px] xs:hidden mt-2 lg:mt-10 md:m-8">
        <div className="md:w-4/5">
          <div className="rounded-lg bg-textw">
            <form className="flex flex-row justify-between">
              <input
                type="search"
                placeholder="Sign up and get up to 100% discount on your first order"
                className="text-sm h-10 lg:w-4/5 md:w-99 rounded-full lg:mr-1 px-2"
              />
              <span className="text-primary lg:w-5 mt-3 px-2 lg:px-8">
                < AiOutlineSearch />
              </span>
            </form>
          </div>
        </div>
      </div>

      <div className="flex md:flex-wrap flex-col items-center md:mt-8 gap-1">
        <ul className="flex gap-2 text-textw">
          <Link to="/Wishlist">
            <li className="md:block px-3 flex flex-col">
              <span className=" md:block lg:block text-2xl  ml-1 lg:ml-8">
               <Link to="/Wishlist"> <AiOutlineHeart /></Link>
              </span>
              <span className='hidden md:block lg:block text-xs  lg: ml-5 uppercase'>Wishlist</span>
            </li>
          </Link>
          <li className=" text-textw text-2xl mr-1 lg:mr-5">
            <AiOutlineShoppingCart />
            <span className="hidden md:block lg:block text-xs uppercase">Cart</span>
          </li>
          <li className=" text-textw text-xs">
            <span className="text-2xl ">
           <Link to='/Login'>   <AiOutlineUser /></Link>
            </span>
            <span className="hidden md:block lg:block text-xs ml-px	">
              <Link to ='/Login'>LOGIN</Link>

            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
