import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const config = {
  headers: { Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}` },
};

const char_limit = 467

export const fetchCharacters = createAsyncThunk("characters/getCharacters",async(page)=>{
  const res = await axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/character?limit=${char_limit}&page=${page}`, config);
  return res.data.docs
})

export const fetchMovies = createAsyncThunk("characters/getMovies",async () => {
  const res = await axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/movie?offset=2`,config);
    return res.data.docs;
  }
);

export const fetchBooks = createAsyncThunk("characters/getBooks",async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/book`,config);
    return res.data.docs;
  }
);

export const charactersSlice = createSlice({
  name: "character",
  initialState: {
    books: [],
    movies: [],
    characters: [],
    isLoading: false,
    page : 0,
    isThereNextPage :true
  },
  reducers: {},
  extraReducers: {
    [fetchCharacters.fulfilled]: (state, action) => {
      state.characters = [...state.characters, ...action.payload];
      state.isLoading = false;
      state.page +=1
      console.log(state.page)
      if(state.page > 2 ){state.isThereNextPage = false;}
       
    },
    [fetchCharacters.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchBooks.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.books = action.payload;
      state.isLoading = false;
    },
    [fetchMovies.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.movies = action.payload;
      state.isLoading = false;
    },
  },
});

export default charactersSlice.reducer;