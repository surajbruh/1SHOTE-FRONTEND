import { Link } from "react-router-dom"

export default function Navbar({ show }) {

    return (
        <>
            <div className="navbar w-full fixed top-0 z-10 backdrop-blur-[4px] py-4 px-8 flex gap-8 items-center justify-between">
                {/* <h1 className="uppercase font-bold text-[3vmax] leading-0 text-center py-8 font-[faroe]" >1shote</h1> */}
                <div className="w-[5vmax] h-[5vmax]">
                    <img
                        className="w-full h-full object-cover object-center"
                        src="\logo.png" alt="" />
                </div>
                <ul className="ml-auto uppercase font-bold text-3xl flex gap-4">
                    {
                        show &&
                        <>
                            <li><Link to="">home</Link></li>
                            <li><Link to="/login">login</Link></li>
                            <li><Link to="/signup">signup</Link></li>
                        </>
                    }
                </ul>
                {
                    !show &&
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
                }
            </div>
        </>
    )
}