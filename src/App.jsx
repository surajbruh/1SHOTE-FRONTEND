import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Wishlist from "./pages/wishlist"
import { Routes, Route } from "react-router-dom"

export default function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </>
  )
}