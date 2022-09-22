import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getAuthorVideos from "./authorAPI";

const initialState = {
  authorAllVideo: [],
  isLoading: false,
  isError: false,
  errors: "",
};

export const fetchAuthorVideosAsyncThunk = createAsyncThunk(
  "authorVideos",
  async (authorName) => {
    const AuthorVideos = await getAuthorVideos(authorName);
    return AuthorVideos;
  }
);

const authorVideosSlice = createSlice({
  name: "author/fetchAuthorVideos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthorVideosAsyncThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchAuthorVideosAsyncThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authorAllVideo = action.payload;
      })
      .addCase(fetchAuthorVideosAsyncThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.authorAllVideo = [];
        state.errors = action.error?.message;
      });
  },
});

export default authorVideosSlice.reducer;
