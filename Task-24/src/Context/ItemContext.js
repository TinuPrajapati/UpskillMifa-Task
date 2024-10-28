import { createContext,useContext } from "react";

const ItemContext = createContext({
    item: [],
    price:0,
    addItem:(value)=>{},
    addPrice:(price)=>{},
});

const ItemProvider = ItemContext.Provider;

const useItem = ()=>{
    return useContext(ItemContext);
}

export {ItemContext,ItemProvider,useItem}