import { createSlice } from "@reduxjs/toolkit";

const photoCardSlice = createSlice({
  name: "card",
  initialState: {
    cards: [],
  },
  reducers: {
    foundImage(state, action) {},
    likesHandler(state, action) {
      console.log(state);
      console.log(action);
      state.cards.push({ image: action.payload.image });
    },
  },
});

export const { foundImage, likesHandler } = photoCardSlice.actions;
export default photoCardSlice.reducer;
