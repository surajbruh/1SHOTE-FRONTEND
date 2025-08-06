import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Wishlist from "./pages/Wishlist"
import { Routes, Route } from "react-router-dom"
import Profile from "./pages/Profile"

export default function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}