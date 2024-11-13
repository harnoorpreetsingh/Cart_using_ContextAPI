import { createContext, useState } from "react";

export const CartCon = createContext(null)

//making context

export const ConPro=(props)=>{
    const [Items, setItems] = useState([])
    return(
    <CartCon.Provider value={{Items, setItems}}>
   {props.children}
    </CartCon.Provider>)}