import {configureStore} from "@reduxjs/toolkit";
import cardReducer from "./control/cardSlice";

export const store = configureStore({
    reducer : {
        card: cardReducer
    }
});