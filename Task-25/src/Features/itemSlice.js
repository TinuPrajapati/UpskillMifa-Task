import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState ={
    items:[],
    totalPrice:0
};

export const itemSlice =createSlice({
    name:"item",
    initialState,
    reducers:{
        addItem:(state,action) =>{
            const item={
                id:nanoid(),
                image:action.payload.image,
                name:action.payload.shoesName,
                price:action.payload.price,
                count:1
            }
            state.items.push(item)
        },
        removeItem:(state,action)=>{
            state.items=state.items.filter(item=>item.id!==action.payload)
        },
        increaseCount:(state,action)=>{
            state.items.map((item)=>{
                if(item.id===action.payload){
                    item.count+=1
                }
            })
        },
        decreaseCount:(state,action)=>{
            state.items.map((item)=>{
                if(item.id===action.payload){
                    item.count-=1
                }
            })
        },
    }
});

export  const {addItem,removeItem,increaseCount,decreaseCount} = itemSlice.actions;

export default itemSlice.reducer;

