export default function Navbar() {
    return (
        <>
            <div className="navbar w-full fixed top-0 z-10 backdrop-blur-[4px] py-2 px-8 flex items-center justify-between">
                <ul className="uppercase font-bold text-3xl flex gap-4">
                    <li><a href="">home</a></li>
                    <li><a href="">about</a></li>
                    <li><a href="">contact</a></li>
                </ul>
                <ul className="uppercase bg-black text-white w-max px-4 py-2 rounded-[50px] font-bold text-3xl flex gap-8">
                    <li>
                        <a href=""><i className="ri-shopping-cart-line"></i></a>
                    </li>
                    <li>
                        <a href=""><i className="ri-user-line"></i></a>
                    </li>
                </ul>
            </div>
        </>
    )
}