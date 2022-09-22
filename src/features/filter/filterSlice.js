import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [],
  search: "",
};

const filterSlice = createSlice({
  name: "filterVideos",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    removeTagSelected: (state, action) => {
      const tagsIndexNumber = state.tags.indexOf(action.payload);
      //   console.log(tagsIndexNumber);
      if (tagsIndexNumber !== -1) {
        state.tags.splice(tagsIndexNumber, 1);
      }
    },
    searchTerm: (state, action) => {
      state.search = action.payload;
    },
    reset: () => {
      return initialState;
    },
  },
});

export default filterSlice.reducer;
export const { tagSelected, removeTagSelected, searchTerm, reset } =
  filterSlice.actions;
