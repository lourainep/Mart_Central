import React, { useState } from 'react';
import { GrStorage } from 'react-icons/gr';
import Navbar from '../components/Navbar';
import TopNavbar from '../components/TopNavbar';
import Footer from '../components/Footer';



const Login = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
    <TopNavbar/>
    <Navbar/>

    {/* Nilagyan ko nang flex, flex-col flex-wrap para mag direcho siya  */}

    <div className="flex flex-wrap flex-col items-center mx-auto p-4">
       
        <img src="./src/assets/favicon 1.png" alt=""  className='text-center place-items-center  justify-center'/>
      
      <h2 className="text-2xl font-inter  text-center items-center font-extrabold text-gray mb-4 ">Login to my</h2> 

      <div className=" mx-auto p-4">
     
        <p className='underline'>I don't have an account.</p>

        </div>
      <form onSubmit={handleSubmit} className="max-w-sm " >
        
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-400"
          />
           <button className='absolute left-[29%] top-[70%] -translate-y-1/2 p-4'>
        
        </button>
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Enter your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-400"
          />
          <button className=' left-[29%] top-[82%] -translate-y-1/2 p-4'>
  
        </button>
        </div>
        <button
          type="submit"
          className="bg-red text-textw py-1 px-20 rounded-lg hover:bg-yellow-500 "
        >
          Log In
        </button>
      </form>
    </div>

    </>
  );
};

export default Login;
