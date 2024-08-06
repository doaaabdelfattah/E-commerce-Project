import React from 'react';
import Footer from '../components/Footer';
import { FaFacebookF, FaGooglePlusG } from 'react-icons/fa';
import { useState } from 'react';
import Nav from '../components/nav';

const Register = () => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted', state);
  };

  return (
    
    <>
    <Nav />
    
      <div className="relative bg-[url('http://localhost:3000/images/banner/3.jpg')] flex items-center pt-2 pb-2 justify-center pl-5 min-h-screen">
        <div className='absolute inset-0 bg-white opacity-50'></div>
        <div className="relative bg-white p-8 border-none max-w-md font-serif w-full">
          <h1 className="text-2xl font-bold mb-6 text-slate-600 text-center">Register Page</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label className="block text-slate-600 text-sm font-bold mb-1" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={state.firstName}
                onChange={inputHandle}
                className="input-field w-full px-2 py-2 border border-slate-200 rounded focus:outline-none focus:ring-2 focus:ring-[#e0e0e0] focus:border-[#e0e0e0]"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-slate-600 text-sm font-bold mb-1" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={state.lastName}
                onChange={inputHandle}
                className="input-field w-full px-2 py-2 border border-slate-200 rounded focus:outline-none focus:ring-2 focus:ring-[#e0e0e0] focus:border-[#e0e0e0]"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm text-slate-600 font-bold" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={state.email}
                onChange={inputHandle}
                className="input-field w-full px-2 py-2 border border-slate-200 rounded focus:outline-none focus:ring-2 focus:ring-[#e0e0e0] focus:border-[#e0e0e0]"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-slate-600 text-sm font-bold" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="At least 6 characters"
                value={state.password}
                onChange={inputHandle}
                className="input-field w-full px-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#e0e0e0] focus:border-[#e0e0e0]"
                required
              />
            </div>
            <button type="submit" className="btn-primary w-full mt-4 p-2 font-bold text-slate-600 border-none bg-[#E0D8BE]">
              Register
            </button>
          </form>
          <div className='flex justify-center items-center mt-5'>
            <div className='h-[1px] bg-slate-300 w-[95%]'></div>
            <span className='px-3 text-slate-600'>Or</span>
            <div className='h-[1px] bg-slate-300 w-[95%]'></div>
          </div>
          <div className='flex justify-center items-center mt-5'></div>
          <button className="btn-primary px-8 py-2 w-full p-1 font-bold text-slate-600 border-none bg-[#E0D8BE] flex justify-center gap-2 mb-3">
            <span className='pt-1'><FaFacebookF /></span>
            <span>Login with Facebook</span>
          </button>
          <button className="btn-primary px-8 py-2 w-full p-1 font-bold text-slate-600 border-none bg-[#E0D8BE] flex justify-center gap-2 mb-3">
            <span className='pt-1'><FaGooglePlusG /></span>
            <span>Login with Google</span>
          </button>
          <div className='flex justify-center items-center mt-5'>
            <span className='px-3 text-slate-600'>Do you have an account?</span>
            <a href="/login" className='text-[#BC9B80]'>Login</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;