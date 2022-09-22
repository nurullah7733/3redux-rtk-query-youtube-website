import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import AuthorVideoItem from "../components/authorVideos/authorVideoItem";
import { Error, Loading } from "../components/loading/loading";

const AuthorVideos = () => {
  const { authorName } = useParams();

  const { authorAllVideo, isLoading, isError, errors } = useSelector(
    (state) => state.authorVideos
  );

  let content;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <Error message={errors} />;
  }
  if (!isLoading && !isError && authorAllVideo.length === 0) {
    content = <div>Videos Not Found!</div>;
  }
  if (!isLoading && !isError && authorAllVideo.length > 0) {
    content = authorAllVideo.map((video) => (
      <AuthorVideoItem key={video.id} video={video} authorName={authorName} />
    ));
  }

  return (
    <div>
      <section className="pt-12">
        <section className="pt-12">
          <h1 className="pl-32 pb-5 text-2xl">
            <span className="text-bold text-3xl uppercase underline">
              {authorName}:
            </span>{" "}
            All Videos
          </h1>
          <div className="grid grid-cols-3 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
            {/* single video  */}
            {content}
          </div>
        </section>
      </section>
    </div>
  );
};

export default AuthorVideos;
