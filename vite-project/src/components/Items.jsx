import { useContext } from "react"
import { CartCon } from "../context/CartContext"

const Items = (props) => {
    const cart = useContext(CartCon)
    // console.log(cart)
  return (
    <>
    <h3>Name: {props.name}</h3>
    <h3>Price: {props.price}</h3>


    <button onClick={()=>{
        cart.setItems([...cart.Items, {name:props.name, price:props.price}])
    }}>Add To Cart</button>
    </>
  )
}

export default Items