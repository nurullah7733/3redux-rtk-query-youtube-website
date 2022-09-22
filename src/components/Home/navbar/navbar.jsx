import React from "react";
import Search from "./search";
import logo from "../../../assets/lws.svg";
import search from "../../../assets/search.svg";
import { Link } from "react-router-dom";
import { reset } from "../../../features/filter/filterSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(reset());
  };
  return (
    <div>
      <nav className="bg-slate-100 shadow-md">
        <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
          <Link to="/">
            <img className="h-10" src={logo} alt="Learn with Sumit" />
          </Link>
          <div className="flex items-center">
            <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
              {/* <!-- search --> */}
              <Search />
              <img
                className="inline h-4 cursor-pointer"
                src={search}
                alt="Search"
              />
            </div>
            <div className=" ml-3 bg-gray-300 py-1 px-3 rounded-md ">
              <button onClick={handleClick}>Reset</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
