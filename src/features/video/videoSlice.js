import getVideo from "./videoAPI";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  video: {},
  isLoading: false,
  isError: false,
  errors: {},
};

export const videoAsyncThunk = createAsyncThunk(
  "video/fetchVideo",
  async (id) => {
    const video = getVideo(id);
    return video;
  }
);

const videoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(videoAsyncThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(videoAsyncThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.video = action.payload;
      })
      .addCase(videoAsyncThunk.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.video = {};
        state.errors = action.error?.message;
      });
  },
});

export default videoSlice.reducer;
