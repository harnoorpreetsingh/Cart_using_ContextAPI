
import './App.css'
import Cart from './components/Cart'
import Items from './components/Items'



function App() {

  return (
    <>
    <Items name="MacAir" price={80000}/>
    <Items name="Mac Mini" price={60000}/>
    <Cart/>
    </>
  )
}

export default App
