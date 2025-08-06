import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Wishlist from "./pages/Wishlist"
import { Routes, Route } from "react-router-dom"
import Profile from "./pages/Profile"
import NotFound from "./pages/NotFound"
import PrivateRoute from "./components/PrivateRoute"

export default function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          } />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          } />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}