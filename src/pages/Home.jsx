import { useState, useEffect, createContext } from "react"
import getData from "../../api"
import Banner from "../components/Banner"
import Card from "../components/Card"

export default function Home() {

    const [items, setItems] = useState([])
    const [addedItems, setAddedItems] = useState([])
    const [activeCardId, setActiveCardId] = useState(null)

    useEffect(() => {
        async function data() {
            const data = await getData("/")
            setItems(data.items)
            setAddedItems(data.cartItem)
            console.log(data)
        }
        data()
    }, [])

    const handleCardClick = async (id, category, name, price) => {
        setActiveCardId(prev => (prev === id ? null : id))
    }

    return (
        <>
            <div className="wrapper bg-[#F2ECEC] ">
                <Banner />
                <div className="page relative w-screen h-screen flex flex-col">
                    <h1 className="uppercase font-bold text-5xl text-center my-8">choose your fit</h1>
                    <div className="page1 w-[80%] mx-auto h-max flex flex-wrap gap-8 justify-center content-center p-4">
                        {items.map((item) => {
                            return (
                                <Card
                                    key={item._id}
                                    id={item._id}
                                    category={item.category}
                                    name={item.name}
                                    price={item.price}
                                    image={item.imageUrl}
                                    isActive={activeCardId === item._id}
                                    setActive={setActiveCardId}
                                    onCardClick={handleCardClick}
                                    cartItems={addedItems} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}