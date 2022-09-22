import React from "react";
import likeImg from "../../../assets/like.svg";
import unLikeImg from "../../../assets/unlike.svg";
import getVideo from "../../../features/likeUnlike/likeUnlikeAPI";

const LikeUnlike = ({ likes, unlikes }) => {
  // const handleClick = async (oldLike, addNew, id) => {
  //   getVideo(oldLike, addNew, id);
  //   console.log("hi");
  // };

  return (
    <div className="flex gap-10 w-48">
      <div className="flex gap-1">
        <div className="shrink-0">
          <img className="w-5 block" src={likeImg} alt="Like" />
        </div>
        <div
          // onClick={() => handleClick(10, 30, 1)}
          className="text-sm leading-[1.7142857] text-slate-600"
        >
          {likes}
        </div>
      </div>
      <div className="flex gap-1">
        <div className="shrink-0">
          <img className="w-5 block" src={unLikeImg} alt="Unlike" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {unlikes}
        </div>
      </div>
    </div>
  );
};

export default LikeUnlike;
