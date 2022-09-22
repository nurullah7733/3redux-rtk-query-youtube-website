import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchTerm } from "../../../features/filter/filterSlice";

const Search = () => {
  const { search } = useSelector((state) => state.filter);
  const [inputValue, setInputValue] = useState(search);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchTerm(inputValue));
  };

  console.log("state", search);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="outline-none border-none mr-2"
          type="search"
          name="search"
          placeholder="Search"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
      </form>
    </>
  );
};

export default Search;
