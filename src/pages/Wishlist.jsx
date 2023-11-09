import React from 'react'
import TopNavbar from '../components/TopNavbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



export const Wishlist = () => {
  return (
    <>
    <TopNavbar/>
    <Navbar/>
    <div className='container center-items mt-10 mb-10 px-px lg:px-px lg:ml-8 '>
    <img src="src/assets/staytuned.png" alt="" />
    </div>

   


    <Footer/>
    </>
  )
}
export default Wishlist;