import {Link} from "react-router-dom";
import { AiOutlineBell, } from 'react-icons/ai'
import {RxDividerVertical} from 'react-icons/rx'
import {FiHelpCircle} from 'react-icons/fi'

// const TopNavbar = () => {
//   return (
//     <>
//    {/* COMMENTS BELOW
  
//    HEY here! there are still codes and links needs to be fix please don't forget to check comments Thanks Lou */}
//   <div className="TopNav bg-tertiary w-full h-7 flex  flex-row md:flex space-between text-textw relative">
//      <div>
//     <div className="Notifications w-28 h-7 left-[12px] top-[7px] absolute text-textw text-xs mx-px  font-bold flex flex-1 font-['Lekton']">
//     {/* Responsive Link to Notification Page  */}
//       <Link to="/Notifications">NOTIFICATIONS</Link>
//     <div className="ml-1.5 content-center w-50 "> <AiOutlineBell/></div>
//       </div> 
//             {/* Responsive text and will route you to Mall and products //added border to show hypen adjusted height  */}
//           <div className="EnterMall w-20 h-3  left-[106px] top-[7px] absolute text-center text-textw text-xs font-bold font-['Lekton'] border-r border-gray-400">
//               <Link to ="/Mall">ENTER MALL</Link>
//         </div>
//       {/* Need to still add page and add link  */}
//       <div className="StartSelling w-28 h-3 left-[178px] top-[7.1px] absolute text-center text-textw text-xs font-bold font-['Lekton'] border-r border-gray-400 ">
//         {/* Add Link below here remove start Selling   */}
//     <Link to ="/Sellercentre">START SELLING</Link>
//     </div>
//     {/* I added fill-current to change svg import from black to white and adjust left px to aliggn the spacing */}
//     <div className=" w-14 h-7 text-center absolute left-[300px] fill-current text-textw top-[7.1px]   "> <FiHelpCircle/></div>
//     <div className="Help w-14 h-7 left-[308px] top-[7px] absolute text-center text-textw text-xs font-bold font-['Lekton']">HELP</div>
//   <div className="GuaranteedFastShipping w-72 h-7 top-4px  text-center mt-1.5 text-textw text-xs font-bold content-center col-span-3 font-['Lexend']">GUARANTEED FAST SHIPPING</div>
//     </div>
//     </div>
  
//   {/* flex - flex-row start here adding basis  */}
  
//             <div className="flex flex-row font-TopNav">
//               <a href="#">SAVE MORE ON APP</a>
//               <button className="px-2 py-1 text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded">Donload APpp</button>
//             </div>
        
//   </>
//   );
// }
// export default TopNavbar;
export const TopNavbar = () => {
  return (
  <nav className=" xs:h-100 bg-primary h-full flex flex-wrap  py-5 px-3 content-center font-TopNav gap-1 text-textw text-xs w-full top-0 left-1 ">
    <div className=" flex-wrap flex">
      <ul className="flex flex-wrap font-TopNav ">
        <li className=" flex flex-wrap mr-2 ml-1 content-center font-TopNav border-r border-gray-400 h-3 mt-1 justify-evenly ">
           <Link to='/Notifications'>NOTIFICATIONS</Link>
            <span className="ml-1 content-center w-5"> <AiOutlineBell/></span>
        </li>
        <li className="border-r border-gray-400 h-3 mt-1 flex flex-wrap mr-2 pr-2 content-center justify-evenly  ">
            <Link to='/Mall'>ENTER MALL</Link> 
        
        </li>
        <li className=" hidden md:block border-r border-gray-400 h-3 mt-1 flex flex-wrap mr-2 pr-2 content-center justify-evenly  ">
        <Link to='/SellerCentre' >START SELLING</Link> 
        </li>
        <li className=" h-3 mt-1 flex flex-wrap mr-2 pr-2 content-center justify-evenly  ">  
          <span className="mr-1"><FiHelpCircle/></span>
          <Link to='/Help' >HELP</Link> 
        </li>
      </ul>
    </div>
      <div className=" hidden md:block   lg:gap-y-11 lg:ml-60 lg:mr-60 font-Lexend font-bold">
        <span >GUARANTEED SHIPPING</span>
      </div>
      <div className="flex flex-wrap">
        <ul className="flex flex-wrap">
          <li className="border-r border-gray-400 h-3 mt-1 flex flex-wrap mr-2 ml-1 pr-2 content-center justify-evenly md:hidden ">
            <span>SAVE ON APP</span>
          </li>
          <li className="bg-amber h-3 mt-1 flex flex-wrap mr-2 py-2 px-2 content-center rounded-xl justify-evenly tracking-widest ">
           
              <button className="">DOWNLOAD APP</button>
           
          </li>
          <li className="hidden md:block mt-1 mr-2">
            TRACK MY ORDER 
          </li>
          <li className="mt-1 mr-2">
            <span>CUSTOMER CARE</span>
          </li>
          <Link to="/CreateAccount"><li className="border-r border-gray-400 h-3 mt-1 pr-1">
            SIGN UP
          </li></Link>
          
          <Link to="/Login">  <li className="ml-1 mt-1">
            LOG IN
          </li></Link>
        </ul>
      </div>
    
  </nav>
  );
}
export default TopNavbar;