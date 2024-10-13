import { createSlice } from "@reduxjs/toolkit";
import courseItems from "../courseItems";

const initialState = {
  cardItems: courseItems,
  quantity: 4,
  total: 0,
};

const cardSlice = createSlice({
  name: "card",
  initialState: initialState,
  reducers: {
    clearCard: (state) => {
      state.cardItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cardItems = state.cardItems.filter((item) => {
        return item.id !== itemId;
      });
    },
    increase: (state, action) => {
      const cardItem = state.cardItems.find((value) => {
        return value.id === action.payload;
      });
      cardItem.quantity += 1;
    },
    decrease: (state, action) => {
      const cardItem = state.cardItems.find((value) => {
        return value.id === action.payload;
      });
      if (cardItem.quantity !== 0) {
        cardItem.quantity -= 1;
      } else if (cardItem.quantity === 0) {
        cardItem.quantity = 0;
      }
    },
    calculateTotal: (state) => {
      let total = 0;
      let quantity = 0;
      state.cardItems.forEach((value) => {
        total = total + (value.quantity * value.price);
        quantity = quantity + value.quantity;
      });
      state.total = total;
      state.quantity = quantity;
    },
  },
});

export const { clearCard, removeItem, increase, decrease, calculateTotal } =
  cardSlice.actions;

export default cardSlice.reducer;
