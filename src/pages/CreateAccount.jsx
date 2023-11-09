import React, { useState } from 'react';
import { GrStorage } from 'react-icons/gr';
import Navbar from '../components/Navbar';
<<<<<<< HEAD
import Footer from '../components/Footer';
import TopNavbar from '../components/TopNavbar';
=======
import TopNavbar from '../components/TopNavbar';

>>>>>>> 72d7c4861af634f456b45d197902c992135e0861

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
  };

  return (
    <>
<<<<<<< HEAD
      <TopNavbar />
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="bg-stone rounded-lg shadow-md p-8 max-w-md w-full mt-5 mb-5">
          <img src="/src/assets/favicon 1.png" alt="Logo" className="mx-auto" />
          <h2 className="text-2xl font-extrabold text-gray mt-4 text-center">
            Create your Mart Central Account
          </h2>

          <p className="text-sm font-semibold mt-4 text-center">Enter your account details</p>
          <button className="text-sm font-semibold underline mt-4 text-center block">
            I already have an account.
          </button>

          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-400"
                />
                <GrStorage className="absolute top-1/2 transform -translate-y-1/2 right-2" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-400"
                />
                <GrStorage className="absolute top-1/2 transform -translate-y-1/2 right-2" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-400"
                />
                <GrStorage className="absolute top-1/2 transform -translate-y-1/2 right-2" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Create a password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-400"
                />
                <GrStorage className="absolute top-1/2 transform -translate-y-1/2 right-2" />
              </div>
            </div>
            <button
              type="submit"
              className="bg-primary text-black py-2 px-4 rounded-lg hover:bg-yellow-500 w-full"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
      <Footer />
=======
    <TopNavbar/>
    <Navbar/>

    {/* Nilagyan ko nang flex, flex-col flex-wrap para mag direcho siya  */}

    <div className="flex flex-wrap flex-col items-center mx-auto p-4">
       
        <img src="./src/assets/favicon 1.png" alt=""  className='text-center place-items-center  justify-center'/>
      
      <h2 className="text-2xl font-inter  text-center items-center font-extrabold text-gray mb-4 ">Create your Mart Central Account</h2> 

      <div className=" mx-auto p-4">
      <p className="text-sm font-semibold">Enter your account details</p> 
        <p>I already have an account.</p>

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
          <button className=' left-[29%] top-[82%] -translate-y-1/2 p-4'>
  
        </button>
        </div>
        <button
          type="submit"
          className="bg-red text-textw py-1 px-20 rounded-lg hover:bg-yellow-500 "
        >
          Create Account
        </button>
      </form>
    </div>
>>>>>>> 72d7c4861af634f456b45d197902c992135e0861
    </>
  );
};

export default CreateAccount;
