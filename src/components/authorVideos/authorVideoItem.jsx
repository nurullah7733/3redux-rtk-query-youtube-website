import React from "react";
import { Link } from "react-router-dom";

const AuthorVideoItem = ({ video }) => {
  const { id, thumbnail, title, duration, avatar, author, date, views, link } =
    video || {};
  return (
    <div>
      <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
        <div className="w-full flex flex-col">
          <div className="relative">
            <iframe
              width="100%"
              className="aspect-video"
              src={link}
              title={title}
              frameBorder=""
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="flex flex-row mt-2 gap-2">
            <Link to={`videos/${id}`} className="shrink-0">
              <img
                src={`${avatar}`}
                className="rounded-full h-6 w-6"
                alt={author}
              />
            </Link>

            <div className="flex flex-col">
              <Link to={`videos/${id}`}>
                <p className="text-slate-900 text-sm font-semibold">{title}</p>
              </Link>
              <p className="text-gray-400 text-xs mt-1">
                {views} . {date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorVideoItem;
