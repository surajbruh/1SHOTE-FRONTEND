import { useState } from "react";
import { postData } from "../../api";

export default function Item({ itemCategory, itemId, itemName, itemPrice, itemImage, setActive, cartItems }) {

    //checks if the items is already added to the cart or not
    const isItemInCart = cartItems.some((cartItem) => cartItem.itemId === itemId)

    const handleOverlayClick = (e) => e.stopPropagation();

    const handleBtn = async () => {
        //send a post req to /user/cart endpoint
        const data = await postData('/user/cart', {
            itemCategory,
            itemId,
            itemName,
            itemPrice,
            itemImage
        })
        console.log(data)

    }

    const [isWishlisted, setIsWishlisted] = useState(false)

    const handleWishlistItem = async () => {
        setIsWishlisted(!isWishlisted)

        //send a post req to /user/wishlist endpoint
        const data = await postData('/user/wishlist', {
            itemId,
            itemName,
            itemPrice,
            itemCategory,
            itemImage
        })
        console.log(data)
    }
    console.log('rednerd')

    return (
        <div
            onClick={handleOverlayClick}
            className="absolute z-5 top-0 right-0 w-full h-full backdrop-blur-[4px] bg-[#00000015] ">
            <div className="m-auto w-max h-full flex gap-4 justify-center items-center">
                <div className="image w-[20vmax] h-[500px]">
                    <img
                        className="w-full h-full object-cover object-center"
                        src={itemImage} alt="" />
                </div>
                <div className="relative bg-amber-50 w-max h-[500px] px-8 py-4">
                    <i
                        onClick={() => {
                            setActive(null)
                        }}
                        className="ri-close-large-line absolute top-0 right-0 translate-x-[120%] translate-y-[-120%] p-4 m-4 font-bold text-3xl"></i>
                    <div className="mb-4">
                        <h1 className="uppercase font-light text-nowrap text-xl leading-[20px] overflow-ellipsis overflow-hidden">{itemCategory}</h1>
                        <h1 className="uppercase font-semibold text-nowrap text-3xl leading-[30px] overflow-ellipsis overflow-hidden">{itemName}</h1>
                        <h1 className="uppercase text-nowrap text-2xl leading-[24px] overflow-ellipsis overflow-hidden">₹{itemPrice}</h1>
                    </div>
                    <div className="flex gap-4 items-center">
                        <button
                            onClick={handleBtn}
                            className={`uppercase font-bold text-xl px-4 py-2 ${isItemInCart ? "bg-green-500" : "bg-[black]"}  active:bg-[#353535] text-white`}>{isItemInCart ? "added" : "add to cart"} </button>
                        <button
                            onClick={handleWishlistItem}
                            className="uppercase font-bold text-xl px-4 py-2 border bg-white active:bg-[#cecece] ">{isWishlisted ? "added to wishlist" : "add to wishlist"}</button>
                    </div>
                </div>
            </div>

        </div>
    )
}