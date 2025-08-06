import { useState } from "react";
import { postData, removeData } from "../../api";

export default function Item({ itemCategory, itemId, itemName, itemPrice, itemImage, setActive, cartItems, setCartItems, wishlistedItems, setWishlistedItems }) {

    //checks if the items is already added to the cart or not
    const isItemInCart = cartItems.some((cartItem) => cartItem.itemId === itemId)
    const isItemInWishlist = wishlistedItems.some((wishlistedItem) => wishlistedItem.itemId === itemId)

    const handleOverlayClick = (e) => e.stopPropagation();

    const handleBtn = async () => {
        try {
            if (isItemInCart) {
                //remove item from cart
                const data = await removeData(`/user/cart/${itemId}`)
                setCartItems(prev => prev.filter((cartItem) => cartItem.itemId !== itemId))

            } else {
                //add item to cart
                //send a post req to /user/cart endpoint
                const data = await postData('/user/cart', {
                    itemCategory,
                    itemId,
                    itemName,
                    itemPrice,
                    itemImage
                })
                console.log(data)
                setCartItems(prev => ([...prev, { itemId }]))
            }

        } catch (error) {
            console.error("Cart update failed:", error.message);
        }

    }

    const handleWishlistItem = async () => {
        try {
            if (isItemInWishlist) {
                //removes from wishlist
                const data = removeData(`/user/wishlist/${itemId}`)
                setWishlistedItems(prev => prev.filter((wishlistedItem) => wishlistedItem.itemId !== itemId))
            } else {
                //adds to wishlist
                //send a post req to /user/wishlist endpoint
                const data = await postData('/user/wishlist', {
                    itemId,
                    itemName,
                    itemPrice,
                    itemCategory,
                    itemImage
                })
                console.log(data)
                setWishlistedItems(prev => ([...prev, { itemId }]))

            }

        } catch (error) {
            console.error("Wishlist update failed:", error.message);

        }
    }
    console.log('rednerd')

    return (
        <div
            onClick={handleOverlayClick}
            className="absolute z-5 top-0 right-0 w-full h-full backdrop-blur-[4px] bg-[#00000015] ">
            <div className="m-auto w-max h-full flex gap-4 justify-center items-center">
                <div className="image w-[20vmax] h-[500px]">
                    <img
                        className="w-full h-full object-contain object-center"
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
                            className={`uppercase font-bold text-xl px-4 py-2 border ${isItemInWishlist ? "bg-[#b2e0ff]" : "bg-white"} active:bg-[#cecece] `}>{isItemInWishlist ? "added to wishlist" : "add to wishlist"}</button>
                    </div>
                </div>
            </div>

        </div >
    )
}