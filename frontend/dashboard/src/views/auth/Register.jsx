import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="min-w-screen min-h-screen bg-[#FAF9F7] flex justify-center items-center">
      <div className="w-[500px] p-3 text-slate-600">
        <div className="bg-[#BC9B80] p-4 gap-2 rounded-md">
          <h2 className="mb-3 font-semibold text-3xl py-2 text-slate-100 text-center ">
            .. Welcome to dashboard ..
          </h2>
          <p className="mb-5 font-md text-lg border-b-2 text-center pb-5">
            Register to your account
          </p>
          <form onSubmit={onSubmit}>
            {/* ===== name */}
            <div className="flex flex-col w-full gap-1 p-2 mb-2 text-lg">
              <label className="" htmlFor="name">
                Name
              </label>
              <input
                className="px-3 py-2 outline-none rounded-sm"
                type="text"
                placeholder="Name"
                name="name"
                value={user.name}
                onChange={handleInputs}
                required
              ></input>
            </div>
            {/* ===== email */}
            <div className="flex flex-col w-full gap-1 p-2 mb-2 text-lg">
              <label className="" htmlFor="email">
                Email
              </label>
              <input
                className="px-3 py-2 outline-none rounded-sm"
                type="email"
                placeholder="E-mail"
                name="email"
                value={user.email}
                onChange={handleInputs}
                required
              ></input>
            </div>
            {/* ===== password */}
            <div className="flex flex-col w-full gap-1 p-2 mb-2 text-lg">
              <label className="" htmlFor="password">
                Password
              </label>
              <input
                className="px-3 py-2 outline-none rounded-sm"
                type="password"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={handleInputs}
                required
              ></input>
            </div>
            <div className="flex items-center w-full p-2 gap-3 mb-3">
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                className="h-4 w-4 overflow-hidden rounded bg-gray-200"
              ></input>
              <label htmlFor="checkbox">I agree to all privacy policy</label>
            </div>
            <div className="flex flex-col w-full gap-1 p-2 mb-2 text-lg">
              <button className="py-2 w-full bg-[#1F212A] text-slate-200 font-semibold hover:bg-[#215c77] transition-all duration-300 text-xl rounded-md">
                Sign Up
              </button>
            </div>

            <div className=" text-slate-200 text-lg  p-3 font-medium flex items-center mb-3 gap-3 justify-center">
              <p>
                already have an account?
                <Link
                  className="font-bold pl-3 hover:text-[#215c77]"
                  to="/login"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
