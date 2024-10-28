import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "../Features/itemSlice";
import priceReducer from "../Features/priceSlice";

export const store= configureStore({
    reducer:{
        itemReducer,
        priceReducer
    }
});