import { createSlice} from "@reduxjs/toolkit";

const initialState ={
    totalPrice:0
};

export const priceSlice= createSlice({
    name:"TotalPice",
    initialState,
    reducers:{
        addPrice:(state,action)=>{
            state.totalPrice+=action.payload
        },
        removePrice:(state,action)=>{
            state.totalPrice-=action.payload
        }
    }
});

export const {addPrice,removePrice} = priceSlice.actions;

export default priceSlice.reducer;