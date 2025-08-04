import Item from "./Item"

export default function Card({ id, category, name, price, image, isActive, onCardClick, setActive, cartItems }) {

    const handleClick = async () => {
        onCardClick(id, category, name, price)
    }

    return (
        <>
            <div>
                <div
                    onClick={handleClick}
                    className="card p-2 w-[15vmax] min-w-[250px] h-max bg-[#e1e1e1] hover:bg-[#c2c2c2] ">
                    <div className="image w-full h-[13vmax] min-h-[250px] mb-[0.5vmax] ">
                        <img
                            className="w-full h-full object-center object-cover"
                            src={image} alt="" />
                    </div>
                    <div className="w-full h-max">
                        <h1 className="uppercase font-light leading-[16px] text-nowrap overflow-ellipsis overflow-hidden">{category}</h1>
                        <h1 className="uppercase font-semibold text-nowrap text-xl leading-[20px] overflow-ellipsis overflow-hidden">{name}</h1>
                        <h1 className="uppercase font-semibold text-nowrap overflow-ellipsis overflow-hidden">₹{price}</h1>
                    </div>
                </div>
                {isActive && <Item
                    itemId={id}
                    itemCategory={category}
                    itemName={name}
                    itemPrice={price}
                    itemImage={image}
                    setActive={setActive}
                    cartItems={cartItems} />}
            </div>
        </>
    )
}