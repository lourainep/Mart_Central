import React, { useState } from 'react';
import { GrStorage } from 'react-icons/gr';
import Navbar from '../components/Navbar';
import TopNavbar from '../components/TopNavbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
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
      <TopNavbar />
      <Navbar />

      <div className=" w-[50%] mx-auto flex flex-wrap flex-col items-center  rounded-lg shadow-md p-8 max-w-md mt-5 mb-5">
        <img src="./src/assets/favicon 1.png" alt="" className="text-center justify-center" />

        <h2 className="text-2xl font-inter text-center font-extrabold text-gray mb-4">Login to my</h2>

        <div className="mx-auto p-4">
          <Link to="/CreateAccount" className="underline">
            I don't have an account
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="max-w-sm">
          <div className="mb-4 relative">
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
            <GrStorage className="absolute left-[29%] top-[70%] -translate-y-1/2 p-4" />
          </div>
          <div className="mb-4 relative">
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
            <GrStorage className="absolute left-[29%] top-[82%] -translate-y-1/2 p-4" />
          </div>
          <button type="submit" className="bg-red text-textw py-1 px-20 rounded-lg hover:bg-yellow-500">
            Log In
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
