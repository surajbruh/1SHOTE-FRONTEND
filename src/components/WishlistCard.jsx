import { useState } from "react"
import { removeData, postData } from "../../api"

export default function WishlistCard({ id, name, price, category, image, setWishlistItems }) {

    const [showRemove, setShowRemove] = useState(false)

    const removeWishlistItem = async (id) => {
        const data = await removeData(`/user/wishlist/${id}`)
        console.log(data)
        setWishlistItems(prev => (prev.filter((wishlistItem) => wishlistItem.itemId !== id))) //removes the item from wishlist list (ui)
    }

    const addToCart = async () => {
        //send a post req to /user/cart endpoint
        const data = await postData('/user/cart', {
            itemCategory: category,
            itemId: id,
            itemName: name,
            itemPrice: price,
            itemImage: image,
        })
        console.log(data)

        removeWishlistItem(id)
    }

    return (
        <>
            <div
                onMouseEnter={() => setShowRemove(true)}
                onMouseLeave={() => setShowRemove(false)}
                className="relative wishlist-card p-2 border-[#c0c0c0] border  w-[15vmax] min-w-[250px] h-max bg-[#e1e1e1] hover:bg-[#cecece] ">
                <div className="image border-[#c0c0c0] border w-full h-[12vmax] min-h-[250px]">
                    <img
                        className="w-full h-full object-center object-cover"
                        src={image} alt="" />
                </div>
                <div className="my-[0.5vmax]">
                    <h1 className="uppercase font-light leading-[16px] text-nowrap overflow-ellipsis overflow-hidden">{category}</h1>
                    <h1 className="uppercase font-semibold text-nowrap text-xl leading-[20px] overflow-ellipsis overflow-hidden">{name} </h1>
                    <h1 className="uppercase font-semibold text-nowrap leading-[20px] overflow-ellipsis overflow-hidden">₹{price}</h1>
                </div>
                {
                    showRemove && <button
                        onClick={() => removeWishlistItem(id)}
                        className="absolute bg-[#dadada] hover:bg-[#cecece] text-[#535353] text-[1.5vmax] rounded-[50%] w-[2vmax] h-[2vmax] flex justify-center items-center m-4 top-0 right-0"><i className="ri-close-fill"></i>
                    </button>
                }
                <button
                    onClick={addToCart}
                    className="uppercase w-full font-bold text-xl  px-4 py-1 bg-black text-white" >move to cart</button>
            </div>
        </>
    )
}