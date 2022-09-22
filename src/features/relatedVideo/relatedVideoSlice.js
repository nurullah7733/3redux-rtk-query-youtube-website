import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getRelatedVideos from "./relatedVideoAPI";

const initialState = {
  relatedVideos: [],
  isLoading: false,
  isError: false,
  errors: {},
};

export const fetchRelatedVideosAsyncThunk = createAsyncThunk(
  "relatedVideo/fetchRelatedVideos",
  async ({ tags, id }) => {
    const RelatedVideos = await getRelatedVideos({ tags, id });

    return RelatedVideos;
  }
);

const relatedVideoSlice = createSlice({
  name: "relatedVideos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideosAsyncThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchRelatedVideosAsyncThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = action.payload;
      })
      .addCase(fetchRelatedVideosAsyncThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.relatedVideos = [];
        state.errors = action.error?.message;
      });
  },
});

export default relatedVideoSlice.reducer;
