// http://localhost:9000/videos?tags_like=tips&tags_like=vscode&id_ne=1

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchRelatedVideosAsyncThunk } from "../../../features/relatedVideo/relatedVideoSlice";
import { connect, useDispatch, useSelector } from "react-redux";
import RelatedVideoListItem from "./relatedVideoListItem";
import { Error, Loading } from "../../loading/loading";

const RelatedVideo = ({ currentVideoId, tags }) => {
  const dispatch = useDispatch();

  const { relatedVideos, isLoading, isError, errors } = useSelector(
    (state) => state.relatedVideos
  );

  useEffect(() => {
    dispatch(fetchRelatedVideosAsyncThunk({ tags, id: currentVideoId }));
  }, [dispatch, currentVideoId, tags]);

  let content;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <Error message={isError} />;
  }
  if (!isLoading && !isError && relatedVideos?.length === 0) {
    content = <div> Related Videos Not found!</div>;
  }
  if (!isLoading && !isError && relatedVideos?.length > 0) {
    content = relatedVideos.map((relatedVideo) => (
      <RelatedVideoListItem key={relatedVideo.id} relatedVideo={relatedVideo} />
    ));
  }

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {/* <!-- single related video --> */}
      {content}
    </div>
  );
};

export default RelatedVideo;
