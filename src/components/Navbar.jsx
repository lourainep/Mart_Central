import {RxDividerVertical} from 'react-icons/rx'
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser, } from 'react-icons/ai'
import {Link} from 'react-router-dom';
const logo = "src/assets/logo.png";
 const Navbar = () => {
  return (
    <>
    <nav className=" bg-secondary flex flex-row md:flex-row content-center justify-items-stretch space-between   h-[90px]" >
        <div className='content-center mt-10 ml-2.5 '>
        <span className="[&>svg]:w-8 content center md:hidden lg:hidden text-textw content-center ">
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
        </div>
    
        
        <div className="logo lg:mr-20  lg:ml-10 object-cover   ">
          
          <Link to="/" >
         <img src={logo} alt="Logo" className='hidden md:block lg:block lg:text-2xl md:text-2xl h-[80px] w-[100px]'  />
        </Link>
        </div>
         
        <div className="searchwrapper align-items mt-10 rounder-lg mb-10 px-10 w-[300px] md:w-1/2 lg:w-[850px] xs:hidden">
          <div className=' justify-center rounded-lg bg-textw'>
          <form className='flex flex-row  justify-evenly'>
            <input type="search" placeholder="Sign up and get upto 100% discount on your first order" className='  text-sm h-10 items-center lg:w-4/5 md:w-99 rounded-full lg:mr-1' ></input>
            <span className='text-amber lg:w-5/5 mt-3 '><AiOutlineSearch/> </span>
          </form>
          </div>
          {/* Account User Details */}
            {/* <div className='hidden md:block flex md:flex-wrap text-textw gap-1'>
              <div className='flex flex-col text-XL content-center h-10 w-10 '>
                <span className='content-center px-4 '><AiOutlineHeart/></span>
                <span className='text-sm'>Wishlist</span>
              </div>
              
              <div className='flex flex-col text-XL content-center h-10 w-10 '>
                <span className='content-center px-4 '><AiOutlineHeart/></span>
                <span className='text-sm'>Cart</span>
              </div>
            </div> */}
           
          </div>
         
          <div className='flex md:flex-wrap space-between text-textw mt-10 gap-1'>
                <ul className='flex flex-row gap-2'>
               <Link to= "/Wishlist">
               <li className='md:block  px-3 flex flex-col '>
                    <span className='hidden md:block lg:block'><AiOutlineHeart/></span>
                    <span>Wishlist</span>
                  </li>
               </Link>
                  <li className='ml-0'>
                    <AiOutlineShoppingCart/>
                    <span className='hidden md:block lg:block'>Cart</span>
                  </li>
                  <li className='mr-2'>
                    <span className=' text-2xl '><AiOutlineUser/></span>
                    <span className=' hidden  md:block lg:block text-xs'>LOGIN</span>
                  </li>
                </ul>
            </div>
      
        {/* <div className='Account fill-textw'>
        <AiOutlineHeart/>
        </div> */}
     
      {/* <div className="flex-1 w-30">
        <input type="search" placeholder="Sign up and get upto 100% discount on your first order" className='w-[105%] ml-[70%] p-2 rounded-full ring-black w-99 ring-1 bg=slate-800 text-sm' />
        <button className='absolute -right-[75%] top-1/2 -translate-y-1/2 p-4'>
          <AiOutlineSearch/>
        </button>
        <div>
        <button className='text-textw absolute -right-[89%] top-1/2 -translate-y-1/2 p-4 '>
          <AiOutlineHeart/>
        </button>
        <button className='text-textw absolute -right-[95%] top-1/2 -translate-y-1/2 p-4 '>
          <AiOutlineShoppingCart/>
        </button>
        <button className='text-textw absolute -right-[102%] top-1/2 -translate-y-1/2 p-4 '>
          <RxDividerVertical/>
        </button>
        <button className='text-textw absolute -right-[108%] top-1/2 -translate-y-1/2 p-4'>
          <AiOutlineUser/>
        </button>
      </div>
      </div> */}
</nav>
</>
  );
}
export default Navbar;