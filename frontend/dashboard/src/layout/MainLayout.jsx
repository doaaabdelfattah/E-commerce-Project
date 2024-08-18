import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";

const MainLayout = () => {
  return (
    <div className="bg-[#F8FBFC] w-full min-h-screen">
      <Header />
      <SideBar />
      <div className="ml-0 lg:ml-[260px] pt-[95px] transition-all ">
        {/* <Outlet /> */}
      </div>
    </div>
  );
};

export default MainLayout;
