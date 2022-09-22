import { configureStore } from "@reduxjs/toolkit";
import relatedVideoSlice from "../features/relatedVideo/relatedVideoSlice";
import tagsSlice from "../features/tags/tagsSlice";
import videoSlice from "../features/video/videoSlice";
// import counterReducer from '../features/counter/counterSlice';
import videosSlice from "../features/vidoes/videosSlice";
import filterSlice from "../features/filter/filterSlice";
import authorVideosSlice from "../features/author/authorSlice";

export const store = configureStore({
  reducer: {
    videos: videosSlice,
    tags: tagsSlice,
    video: videoSlice,
    relatedVideos: relatedVideoSlice,
    filter: filterSlice,
    authorVideos: authorVideosSlice,
  },
});
