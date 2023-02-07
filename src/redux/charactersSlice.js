import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const config = {
  headers: { Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}` },
};

export const fetchCharacters = createAsyncThunk("characters/getCharacters",async()=>{
  const res = await axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/character?limit=10`, config);
  return res.data.docs
})

export const fetchMovies = createAsyncThunk("characters/getMovies",
  async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/moive`,
      config
    );
    return res.data.docs;
  }
);

export const fetchBooks = createAsyncThunk(
  "characters/getBooks",
  async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/book`,
      config
    );
    return res.data.docs;
  }
);

export const charactersSlice = createSlice({
  name: "character",
  initialState: {
    books: [],
    movies: [],
    characters: [],
  },
  reducers: {},
  extraReducers: {
    [fetchCharacters.fulfilled]: (state, action) => {
      state.characters = action.payload;
    },
    [fetchBooks.fulfilled]: (state,action) => {
      state.books = action.payload;
    },
    [fetchMovies.fulfilled]: (state,action) => {
      state.movies = action.payload;
    },
  },
});

export default charactersSlice.reducer;