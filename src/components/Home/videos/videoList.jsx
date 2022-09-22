import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Video from "./video";
import { videosAsyncThunk } from "../../../features/vidoes/videosSlice";
import { Error, Loading } from "../../loading/loading";

const VideoList = () => {
  const dispatch = useDispatch();
  const { videos, isLoading, isError, errors } = useSelector(
    (state) => state.videos
  );
  const { tags, search } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(videosAsyncThunk({ tags, search }));
  }, [dispatch, tags, search]);

  let content;

  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <Error message={errors} />;
  }
  if (!isLoading && !isError && videos?.length === 0) {
    content = <div>No videos found</div>;
  }
  if (!isLoading && !isError && videos?.length > 0) {
    content = videos.map((video) => <Video key={video.id} video={video} />);
  }

  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {/* single video  */}
          {content}
        </div>
      </section>
    </section>
  );
};

export default VideoList;
