import { Link } from "react-router-dom"

export default function Navbar() {

    return (
        <>
            <div className="navbar w-full fixed top-0 z-10 backdrop-blur-[4px] py-4 px-8 flex items-center justify-between">
                <ul className="uppercase font-bold text-3xl flex gap-4">
                    <li><Link to="">home</Link></li>
                    <li><Link to="/login">login</Link></li>
                    <li><Link to="/signup">signup</Link></li>
                </ul>
                <ul className="uppercase bg-black text-white w-max px-4 py-2 rounded-[50px] font-bold text-3xl flex gap-8">
                    <li>
                        <Link to="/cart"><i className="ri-shopping-cart-line"></i></Link>
                    </li>
                    <li>
                        <Link to="/wishlist"><i className="ri-heart-line"></i></Link>
                    </li>
                    <li>
                        <Link to="/profile"><i className="ri-user-line"></i></Link>
                    </li>
                </ul>
            </div>
        </>
    )
}