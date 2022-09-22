import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getVideos from "./videoAPI";

const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  errors: {},
};

export const videosAsyncThunk = createAsyncThunk(
  "videos/fetchVideos",
  async ({ tags, search, pageNumber }) => {
    const videos = await getVideos(tags, search, pageNumber);
    return videos;
  }
);

const VideosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(videosAsyncThunk.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(videosAsyncThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(videosAsyncThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.videos = [];
        state.isError = true;
        state.errors = action.error?.message;
      });
  },
});

export default VideosSlice.reducer;
