import WishlistCard from "../components/WishlistCard"
import { useEffect, useState } from "react"
import getData from "../../api"
import { Link } from "react-router-dom"

export default function Wishlist() {

    const [wishlistItems, setWishlistItems] = useState([])

    useEffect(() => {
        //fetches all items that are added to wishlist by the user
        const fetchWishlistItem = async () => {
            const data = await getData('/user/wishlist')
            console.log(data)
            setWishlistItems(data)
        }
        fetchWishlistItem()

    }, [])

    return (
        <>
            <div className="wrapper w-screen h-screen">
                <div className=" px-8 py-4 flex items-center justify-between">
                    <h1 className="uppercase font-bold text-5xl">your wishlist</h1>
                    <Link to="/">
                        <div className="w-max flex justify-center items-center gap-4 px-8 py-2 rounded-[50px] h-max bg-black active:bg-[#242424] text-white ">
                            <i className="ri-arrow-left-s-line text-2xl"></i>
                            <div className="uppercase text-xl">continue shopping</div>
                        </div>
                    </Link>
                </div>
                <div className="w-[90%] m-auto mt-4 px-4 flex flex-wrap justify-center items-center gap-8">
                    {!wishlistItems.length ?
                        <div className="uppercase text-2xl text-center">
                            <h1>no items in wishlist currently</h1>
                        </div>
                        :
                        wishlistItems.map((wishlistItem, index) => {
                            return (
                                <WishlistCard
                                    key={index}
                                    id={wishlistItem.itemId}
                                    name={wishlistItem.itemName}
                                    category={wishlistItem.itemCategory}
                                    price={wishlistItem.itemPrice}
                                    image={wishlistItem.itemImageUrl}
                                    setWishlistItems={setWishlistItems} />
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}