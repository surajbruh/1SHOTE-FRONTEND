import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import getData from "../../api"
import CartItem from "../components/CartItem"

export default function Cart() {

    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        //fetches all item added to cart
        async function fetchCardData() {
            const data = await getData('/user/cart')
            setCartItems(data)
        }
        fetchCardData()
    }, [])
    console.log(cartItems)

    return (
        <>
            <div className="checkout bg-[#F2ECEC] w-screen min-h-screen px-8 py-8 flex flex-col justify-start">
                <div className="uppercase font-bold flex items-center justify-between mb-16">
                    <h1 className="text-5xl leading-[30px]">my cart</h1>
                    <Link to="/">
                        <div className="w-max flex justify-center items-center gap-4 px-8 py-2 rounded-[50px] h-max bg-black active:bg-[#242424] text-white ">
                            <i className="ri-arrow-left-s-line text-2xl"></i>
                            <div className="uppercase text-xl">continue shopping</div>
                        </div>
                    </Link>
                </div>
                {
                    !cartItems.length ?
                        <div className="uppercase text-2xl text-center">
                            <h1>your cart is empty</h1>
                        </div>
                        :
                        <table className="w-full mb-8">
                            <thead className="uppercase font-bold text-xl">
                                <tr>
                                    <th scope="col">item</th>
                                    <th scope="col">price</th>
                                    <th scope="col">qty</th>
                                    <th scope="col">total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((cartItem, index) => {
                                    return (
                                        <CartItem
                                            key={index}
                                            itemId={cartItem.itemId}
                                            itemName={cartItem.itemName}
                                            itemPrice={cartItem.itemPrice}
                                            itemCategory={cartItem.itemCategory}
                                            itemImageUrl={cartItem.itemImageUrl}
                                            setCartItems={setCartItems} />
                                    )
                                })}
                            </tbody>
                        </table>
                }
                <div className="bg-[#dadada] mt-auto p-8 rounded-[1vmax] flex justify-between">
                    <div>
                        <h1 className="uppercase mb-4 font-semibold text-2xl">choose shipping mode</h1>
                        <ul>
                            <li className="mb-2">
                                <div className="flex gap-2 items-center font-medium uppercase">
                                    <input
                                        className=""
                                        type="checkbox" name="" id="" />
                                    <h1>store pickup</h1>
                                    <h1 className="text-[14px] ">(in 20min) </h1>
                                    <h1 className="text-[14px] ">free</h1>
                                </div>
                            </li>
                            <li className="mb-2">
                                <div className="flex gap-2 items-center font-medium uppercase">
                                    <input
                                        className=""
                                        type="checkbox" name="" id="" />
                                    <h1>delivery at home</h1>
                                    <h1 className="text-[14px] ">(in 45min) </h1>
                                    <h1 className="text-[14px] ">$10</h1>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="w-max flex flex-col items-center justify-center">
                        <table className="w-full h-max mb-4">
                            <tbody className="font-semibold flex flex-col w-full p-2">
                                <tr className="uppercase mb-2 w-full flex justify-between">
                                    <td>subtotal:</td>
                                    <td>$699</td>
                                </tr>
                                <tr className="uppercase mb-2 w-full flex justify-between">
                                    <td>shipping:</td>
                                    <td>free</td>
                                </tr>
                            </tbody>
                            <tfoot className="font-semibold flex flex-col w-full p-2 border-t">
                                <tr className="uppercase mb-2 w-full flex justify-between">
                                    <td>total</td>
                                    <td>$699</td>
                                </tr>
                            </tfoot>
                        </table>
                        <div className="uppercase font-bold bg-red-500 text-2xl text-white px-10 py-2 w-max flex gap-4">
                            <h1>checkout</h1>
                            <h1>$699</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}