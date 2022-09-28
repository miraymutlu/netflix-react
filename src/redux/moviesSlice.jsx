import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk(
  "movies/getMovies",
  async () => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/MostPopularMovies/k_3b8chd2o`);
    return res.data;
  }
);

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    items: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: {
    [fetchMovies.pending]: (state) => {
      state.status="loading";
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.items=[{...state.items, ...action.payload}];
      state.status="succeeded";
    },
    [fetchMovies.rejected]: (state,action) => {
      state.status="failed";
      state.error=action.error.message;
    },
  },
});

export default moviesSlice.reducer;