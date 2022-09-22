import React from "react";

import LikeUnlike from "./likeUnlike";

const VideoPlayer = ({ title, description, link, date, likes, unlikes }) => {
  return (
    <div>
      <iframe
        width="100%"
        className="aspect-video"
        src={link}
        title={title}
        frameBorder=""
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {/* video description */}
      <div>
        <h1 className="text-lg mt-6 font-semibold tracking-tight text-slate-800">
          {title}
        </h1>
        <div className="pb-4 flex items-center space-between border-b">
          <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
            {date}
          </h2>

          {/* <!-- like/unlike --> */}
          <LikeUnlike likes={likes} unlikes={unlikes} />
        </div>

        <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
          {description}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
