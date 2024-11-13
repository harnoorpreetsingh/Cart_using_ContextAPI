import { useContext } from "react"
import { CartCon } from "../context/CartContext"

const Cart = () => {
 const data =  useContext(CartCon)
 console.log(data.Items, "itemzzzz")
 const total = data.Items.reduce((a,b)=> a + b.price, 0)
  return (
    <>
    <h1>Cart</h1>
    {data && data.Items.map((item,index)=>{
        return(
        <li key={index} >   {item.name} - {item.price} </li>)
    })}


<h2>Total Amount: ${total} </h2>
    </>
  )
}

export default Cart