import React from 'react';
import Footer from '../components/Footer';
import { FaFacebookF, FaGooglePlusG } from 'react-icons/fa';
import { useState } from 'react';
import Nav from '../components/nav';

const Login = () => {
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
      <div className="relative bg-[url('http://localhost:3000/images/banner/3.jpg')] flex items-center justify-center pl-5 min-h-screen">
        <div className='absolute inset-0 bg-white opacity-50'></div>
        <div className="relative bg-white p-8 border-none max-w-md font-serif w-full">
          <h1 className="text-2xl font-bold mb-6 text-slate-600 text-center">Log In</h1>
          <form onSubmit={handleSubmit}>
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
                placeholder="Password"
                value={state.password}
                onChange={inputHandle}
                className="input-field w-full px-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#e0e0e0] focus:border-[#e0e0e0]"
                required
              />
            </div>
            <button type="submit" className="btn-primary w-full mt-4 p-2 font-bold text-slate-600 border-none bg-[#E0D8BE]">
              Log In
            </button>
          </form>
          <div className='flex justify-center items-center mt-5'>
            <span className='px-3 text-slate-600'>Don't have an account?</span>
            <a href="/register" className='text-[#BC9B80]' > Create account</a>
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;