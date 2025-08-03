import Counter from "./Counter"

export default function CartItem({ itemName, itemPrice, itemCategory, itemImageUrl }) {

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
                    <Counter />
                </td>
                <td className=" w-[25%] h-[10vmax] px-2 py-4"  >
                    <div className="w-full h-full flex justify-center items-center">
                        <h1 className="font-semibold text-xl uppercase">$699.00</h1>
                    </div>
                </td>
            </tr>
        </>
    )
}