import React from "react";
import { MdEmail } from "react-icons/md";
import {
  FaPhone,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaUser,
  FaLock,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const user = false;
  return (
    <div className="w-full bg-white">
      <div className="header-top bg-[#FAF9F7] md-lg:hidden ">
        <div className="w-[85%] lg:w[90%] mx-auto">
          <div className="flex w-full justify-between items-center h-[60px] text-[#0F233C]">
            {/* =========== Left side ========= */}
            <ul className="flex justify-start items-center gap-8 font-semibold">
              <li className="flex relative justify-center items-center gap-2 after:absolute after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px] hover:text-[#BC9B80]">
                <span>
                  <MdEmail />
                </span>
                <span>support@gmail.com</span>
              </li>
              <li className="flex relative justify-center items-center gap-2 hover:text-[#BC9B80]">
                <span>
                  <FaPhone />
                </span>
                <span>+1234545667</span>
              </li>
            </ul>
            {/* =========== right side ========= */}
            <div className="relative">
              <div className="flex justify-center items-center gap-10 ">
                {/* - - Social Links - - */}
                <div className="flex justify-center items-center gap-4 text-[1.5rem]">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a className="hover:text-[#BC9B80]" href="#">
                    <FaFacebook />
                  </a>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a className="hover:text-[#BC9B80]" href="#">
                    <FaTwitter />
                  </a>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a className="hover:text-[#BC9B80] " href="#">
                    <FaLinkedin />
                  </a>
                </div>
                {/* - -  User Name - - */}
                {user ? (
                  <Link
                    className="flex cursor-pointer justify-center items-center gap-2"
                    to="/dashboard"
                  >
                    <span>
                      <FaUser />
                    </span>
                    <span> Doaa Abdelfattah </span>
                  </Link>
                ) : (
                  <Link
                    className="flex cursor-pointer justify-center items-center gap-2"
                    to="/login"
                  >
                    <span>
                      <FaLock />
                    </span>
                    <span>Login </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
