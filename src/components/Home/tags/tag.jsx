import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeTagSelected,
  tagSelected,
} from "../../../features/filter/filterSlice";

const Tag = ({ tag }) => {
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state.filter);

  const isSelected = tags.includes(tag.title) ? true : false;

  const handleClick = (value) => {
    if (isSelected) {
      dispatch(removeTagSelected(value));
    } else {
      dispatch(tagSelected(value));
    }
  };

  return (
    <>
      <div
        onClick={() => handleClick(tag.title)}
        className={`px-4 py-1 rounded-full cursor-pointer ${
          isSelected ? "bg-blue-600 text-white" : "text-blue-600 bg-blue-100"
        }`}
      >
        {tag.title}
      </div>
    </>
  );
};

export default Tag;
