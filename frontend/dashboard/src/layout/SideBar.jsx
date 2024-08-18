import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getNav } from "../navigation";

const SideBar = () => {
  const [allnav, setAllNav] = useState([]);
  useEffect(() => {
    const nav = getNav("admin");
    setAllNav(nav);
    console.log(allnav);
  }, []);

  return (
    <div className="">
      <div></div>
      <div
        className={`w-[300px] fixed bg-[#242E41] z-50 top-0 h-screen shadow-md transition-all`}
      >
        <div className="h-[70px] mt-10 flex justify-center items-center my-5">
          <Link
            to="/"
            className="text-slate-100 font-serif p-5 text-5xl text-center  "
          >
            E-Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
