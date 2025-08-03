import { useEffect, useState } from "react"
import Counter from "./Counter"
import { removeData } from "../../api"

export default function CartItem({ itemId, itemName, itemPrice, itemCategory, itemImageUrl, setCartItems }) {

    const [total, setTotal] = useState(itemPrice)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        setTotal(itemPrice * counter)
    }, [counter, itemPrice])

    const removeItem = async () => {
        const data = await removeData(`/user/cart/${itemId}`)
        console.log(data)
        setCartItems(prev => prev.filter((cartItem) => cartItem.itemId !== itemId))
    }

    return (
        <>
            <tr className="border-t">
                <td className="w-[30%] h-[10vmax] px-2 py-4">
                    <div className="flex gap-4 p-2">
                        <div className="image min-w-[8vmax] h-[8vmax] overflow-hidden ">
                            <img
                                className="w-full h-full object-center object-cover"
                                src={itemImageUrl} alt="" />
                        </div>
                        <div className="uppercase w-full h-full py-2">
                            <h1 className="font-semibold">{`${itemName}`} </h1>
                            <h1 className="font-light">{`${itemCategory}`}</h1>
                        </div>
                    </div>
                </td>
                <td className="w-[15%] h-[10vmax] px-2 py-4 ">
                    <div className="py-2 w-full h-full flex items-center justify-center">
                        <h1 className="uppercase font-semibold text-xl">₹{`${itemPrice}`}</h1>
                    </div>
                </td>
                <td className="w-[15%] px-4">
                    <Counter counter={counter} setCounter={setCounter} />
                </td>
                <td className=" w-[25%] h-[10vmax] px-2 py-4"  >
                    <div className="w-full h-full flex justify-center items-center">
                        <h1 className="font-semibold text-xl uppercase">{total.toFixed(2)}</h1>
                    </div>
                </td>
                <td>
                    <button
                        onClick={removeItem}
                        className="font-bold text-3xl"><i className="ri-close-large-line"></i></button>
                </td>
            </tr>
        </>
    )
}