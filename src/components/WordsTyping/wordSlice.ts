import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Word = {
  sign: string;
  word: number;
  letter: number;
  punctuation: number;
};
const initialState: Word = {
  sign: "",
  word: 0,
  letter: 0,
  punctuation: 0,
};

export const slice = createSlice({
  name: "word",
  initialState,
  reducers: {
    countWord: (state, action: PayloadAction<string>) => {
      state.sign = action.payload;
      state.word = action.payload.split(/\s+/).filter(word => word.match(/[a-zA-Zа-яА-Я0-9]+/)).length
      state.letter = action.payload.split("").filter((letter) => /^[\wа-яА-Я]+$/.test(letter)).length;
      state.punctuation = action.payload.split("").filter((char) => /[.,:;!?—]/.test(char)).length;
    },
  },
});

export const { countWord } = slice.actions;

export const wordSlice = slice.reducer;
