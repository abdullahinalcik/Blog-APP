import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    loading: false,
    error: false,
    blog:[],
    category:[],
    // newBlog:[]
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getBlogSuccess: (state, { payload }) => {
      state.loading = false;
      state.blog = payload

    },
    getCategorySuccess: (state, { payload }) => {
      state.loading = false;
      state.category = payload

    },

    postNewBlogSuccess:(state, { payload }) => {
      state.loading = false;
      // state.newBlog= payload
      

    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});
export const { fetchFail, fetchStart, getBlogSuccess,  getCategorySuccess,postNewBlogSuccess } = blogSlice.actions;

export default blogSlice.reducer;
