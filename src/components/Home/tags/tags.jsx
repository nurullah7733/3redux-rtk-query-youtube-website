import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tag from "./tag";
import { tagsAsyncThunk } from "../../../features/tags/tagsSlice";
import { Loading, Error } from "../../loading/loading";
// import { Error } from "../../loading/loading";

const Tags = () => {
  const { tags, isError, isLoading, errors } = useSelector(
    (state) => state.tags
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tagsAsyncThunk());
  }, [dispatch]);

  return tags?.length > 0 ? (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-x-auto">
        {tags.map((tag) => (
          <Tag key={tag.id} tag={tag} />
        ))}
      </div>
    </section>
  ) : null;
};

export default Tags;
