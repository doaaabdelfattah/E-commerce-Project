import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const Pagination = ({
  pageNumber,
  setPageNumber,
  totalItem,
  perPage,
  btnShowItem,
}) => {
  // ========= Calculations for Pagination
  // 1) Calculates the total number of pages
  let totalPages = Math.ceil(totalItem / perPage);
  //  Initially set to the current page number.
  let startPage = pageNumber;
  let dif = totalPages - pageNumber;

  // ========== Adjusting startPage and endPage

  if (dif <= btnShowItem) {
    startPage = totalPages - btnShowItem;
  }
  if (startPage <= 0) {
    startPage = 1;
  }
  let endPage = startPage < 0 ? btnShowItem : btnShowItem + startPage;

  // ========= Creating Pagination Buttons
  const createBtn = () => {
    const btns = [];
    for (let i = startPage; i < endPage; i++) {
      btns.push(
        <li
          onClick={() => setPageNumber(i)}
          className={` ${
            pageNumber === i
              ? "bg-[#BC9B80] shadow-lg shadow-indigo-300/50 text-black"
              : "bg-[#BC9B8] hover:bg-[#FAF9F7] shadow-lg hover:shadow-indigo-500/50 hover:text-black text-black]"
          } w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer `}
          key={i}
        >
          {i}
        </li>
      );
    }
    return btns;
  };
  return (
    <ul className="flex gap-3">
      {pageNumber > 1 && (
        <li
          onClick={() => setPageNumber(pageNumber - 1)}
          className="w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-300 text-[#000000] cursor-pointer"
        >
          <MdOutlineKeyboardDoubleArrowLeft />
        </li>
      )}
      {createBtn()}
      {pageNumber < totalPages && (
        <li
          onClick={() => setPageNumber(pageNumber + 1)}
          className="w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-300 text-[#000000] cursor-pointer"
        >
          <MdOutlineKeyboardDoubleArrowRight />
        </li>
      )}
    </ul>
  );
};
export default Pagination;

//pageNumber: The current page number.
// setPageNumber: A function to update the current page number.
// totalItem: The total number of items.
// perPage: The number of items per page.
// showItem: The number of pagination buttons to display.
