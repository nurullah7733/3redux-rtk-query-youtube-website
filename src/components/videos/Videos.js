import { useGetVideosQuery } from "../../features/api/apiSlice";
import VideoLoader from "../ui/loaders/VideoLoader";
import Error from "../ui/Error";
import Video from "./Video";

export default function Videos() {
  const {
    data: videos,
    error,
    isLoading,
    isError,
  } = useGetVideosQuery(undefined, {});

  let content;
  if (isLoading)
    content = (
      <>
        <VideoLoader /> <VideoLoader /> <VideoLoader /> <VideoLoader />
        <VideoLoader />
      </>
    );
  if (!isLoading && isError) {
    content = <Error message={error} />;
  }
  if (!isLoading && !isError && videos.length === 0) {
    content = <Error message={"Videos Not Found!"} />;
  }
  if (!isLoading && !isError && videos.length > 0) {
    content = videos.map((video) => <Video key={video.id} video={video} />);
  }

  return <>{content}</>;
}
