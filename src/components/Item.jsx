export default function Item({ itemCategory, itemName, itemPrice, itemImage, setActive }) {

    const handleClick = (e) => {
        e.stopPropagation();
    }

    return (
        <>
            <div
                onClick={handleClick}
                className="page2 absolute z-5 top-0 right-0 w-full h-full backdrop-blur-[4px] bg-[#00000015] ">
                <i
                    onClick={() => {
                        setActive(null)
                    }}
                    className="ri-close-large-line absolute top-0 right-0 bg-white p-4 m-4 border rounded-[50%] font-bold text-5xl"></i>
                <div className="m-auto w-max h-full flex gap-4 justify-center items-center">
                    <div className="image w-[20vmax] h-[500px]">
                        <img
                            className="w-full h-full object-cover object-center"
                            src={itemImage} alt="" />
                    </div>
                    <div className="bg-amber-50 w-max h-[500px] px-8 py-4">
                        <div className="mb-4">
                            <h1 className="uppercase font-light text-nowrap text-xl leading-[20px] overflow-ellipsis overflow-hidden">{itemCategory}</h1>
                            <h1 className="uppercase font-semibold text-nowrap text-3xl leading-[30px] overflow-ellipsis overflow-hidden">{itemName}</h1>
                            <h1 className="uppercase text-nowrap text-2xl leading-[24px] overflow-ellipsis overflow-hidden">₹{itemPrice}</h1>
                        </div>
                        <div className="flex gap-4 items-center">
                            <button className="uppercase font-bold text-xl px-4 py-2 bg-[black] active:bg-[#353535] text-white">add to cart</button>
                            <button className="uppercase font-bold text-xl px-4 py-2 border bg-white active:bg-[#cecece] ">add to wishlist</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}