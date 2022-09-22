import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { videoAsyncThunk } from "../features/video/videoSlice";
import { fetchRelatedVideosAsyncThunk } from "../features/relatedVideo/relatedVideoSlice";
import { Error, Loading } from "../components/loading/loading";
import VideoPlayer from "../components/VideoDetails/videoPlayer/videoPlayer";
import RelatedVideo from "../components/VideoDetails/relatedVideo/relatedVideoList";

const VideoDetails = () => {
  const { videoId } = useParams();
  const dispatch = useDispatch();
  const { video, isLoading, isError, errors } = useSelector(
    (state) => state.video
  );
  // const relatedVideos = useSelector((state) => state.relatedVideos);
  // const id = JSON.stringify(video.id);

  useEffect(() => {
    dispatch(videoAsyncThunk(videoId));
    // dispatch(fetchRelatedVideosAsyncThunk(video.tags, id));
  }, [dispatch, videoId]);

  let content = null;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <Error message={errors} />;
  }
  if (!isLoading && !isError && !video?.id) {
    content = <div>Video Not Found!</div>;
  }
  if (!isLoading && !isError && video?.id) {
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
          {/* <!-- video player --> */}
          <VideoPlayer
            title={video.title}
            link={video.link}
            description={video.description}
            date={video.date}
            likes={video.likes}
            unlikes={video.unlikes}
          />
        </div>

        {/* <!-- related videos --> */}
        <RelatedVideo currentVideoId={video.id} tags={video.tags} />
      </div>
    );
  }

  return (
    <>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          {content}
        </div>
      </section>
    </>
  );
};

export default VideoDetails;
