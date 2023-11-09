import React, { useState } from 'react';
import { GrStorage } from 'react-icons/gr';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopNavbar from '../components/TopNavbar';

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
    </>
  );
};

export default CreateAccount;
