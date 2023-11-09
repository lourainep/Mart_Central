import React from 'react'
import TopNavbar
 from '../components/TopNavbar';
 import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const Help = () => {
  return (
   <>
    <TopNavbar/>
      <Navbar/>
      <div className='container center-items mt-10 mb-10 px-px lg:px-px lg:ml-8 '>
      <img src="src/assets/maintenance.png" alt="" />
      </div>
    <Footer/>
   </>
  )
}
export default Help;