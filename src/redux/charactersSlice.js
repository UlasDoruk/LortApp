import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Apı token
const config = {
  headers: { Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}` },
};

// Character limit for pagination
const char_limit = 20

// Extra reducers using for fething Apı
export const fetchCharacters = createAsyncThunk("characters/getCharacters",async(page)=>{
  const res = await axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/character?limit=${char_limit}&offset=${page*char_limit}`, config);
  return res.data.docs
})

export const fetchCharacter = createAsyncThunk("characters/getCharacter",async(id)=>{
  const res = await axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/character/${id}`,config)
  return res.data
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
    character: [],
    movie: [],
    book: [],
    books: [],
    movies: [],
    characters: [],
    status: "idle",
    page: 0,
    isThereNextPage: true,
  },
  reducers: {
    getCharacter: (state, action) => {
      state.character = action.payload;
    },
    getMovie: (state, action) => {
      state.movie = action.payload;
    },
    getBook: (state, action) => {
      state.book = action.payload;
    },
  },
  extraReducers: {
    [fetchCharacters.fulfilled]: (state, action) => {
      state.characters = [...state.characters, ...action.payload];
      state.status = false;
      state.page += 1;
      if (state.page > 45) {
        state.isThereNextPage = false;
      }
    },[fetchCharacter.fulfilled]:(state,action)=>{
      state.character = action.payload
    },
    [fetchCharacters.pending]: (state) => {
      state.status = "loading";
    },
    [fetchBooks.pending]: (state) => {
      state.status = "loading";
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.books = action.payload;
      state.status = "succeeded";
    },
    [fetchMovies.pending]: (state) => {
      state.status = "loading";
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.movies = action.payload;
      state.status = "succeeded";
    },
  },
});

export const { getCharacter, getMovie, getBook } = charactersSlice.actions;
export default charactersSlice.reducer;