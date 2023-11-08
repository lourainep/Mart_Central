import React, { useState } from 'react';
import {GrStorage} from 'react-icons/gr'
import TopNavbar from '../components/TopNavbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'


const CreateAccount = () => {
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
    // Insert API for registration
  };

  return (
    <>
    <TopNavbar/>
    <Navbar/>
    
    <div className="container mx-auto p-4">
        <div className="container ml-[10%] p-4">
        <img src="./src/assets/favicon 1.png" alt="" />
        </div>
      <h2 className="text-2xl font-inter font-extrabold text-gray mb-4 ">Create your Mart Central Account</h2> 

      <div className="container mx-auto p-4">
      <p className="text-sm font-semibold">Enter your account details</p> 
      <button className='absolute text-sm font-semibold left-[18%] top-[35%] -translate-y-1/2 p-4 hover:underline'>
          I already have an account.
        </button>
        </div>
      <form onSubmit={handleSubmit} className="max-w-sm " >
        <div className="mb-4"> 
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name 
          </label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-400"
          /> 
          <button className='absolute left-[29%] top-[46%] -translate-y-1/2 p-4'>
          <GrStorage/>
        </button>
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-400"
          />
        </div>
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
          <GrStorage/>
        </button>
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Create a password
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
          <button className='absolute left-[29%] top-[82%] -translate-y-1/2 p-4'>
          <GrStorage/>
        </button>
        </div>
        <button
          type="submit"
          className="bg-red text-textw py-1 px-20 rounded-lg hover:bg-yellow-500 ml-16"
        >
          Create Account
        </button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default CreateAccount;
