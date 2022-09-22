import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getTags from "./tagsAPI";

const initialState = {
  tags: [],
  isError: false,
  isLoading: false,
  errors: {},
};

export const tagsAsyncThunk = createAsyncThunk("tags/fetchTags", async () => {
  const tags = await getTags();
  return tags;
});

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(tagsAsyncThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(tagsAsyncThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tags = action.payload;
      })
      .addCase(tagsAsyncThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.tags = [];
        state.isError = true;
        state.errors = action.error?.message;
      });
  },
});

export default tagsSlice.reducer;
