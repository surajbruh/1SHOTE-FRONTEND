import { useState, useEffect, createContext } from "react"
import getData, { verifyUser } from "../../api"
import Banner from "../components/Banner"
import Card from "../components/Card"

export default function Home() {

    const [items, setItems] = useState([])
    const [userCartItems, setUserCartItems] = useState([])
    const [wishlistedItems, setWishlistedItems] = useState([])
    const [activeCardId, setActiveCardId] = useState(null)

    useEffect(() => {
        async function data() {
            const data = await getData("/")
            setItems(data.items)
            setUserCartItems(data.cartItem)
            setWishlistedItems(data.wishlistedItems)
            console.log(data)
        }
        data()
    }, [])



    const [show, setShow] = useState(true)
    useEffect(() => {
        const verify = async () => {
            const data = await verifyUser()
            console.log(data)
            const { status, message } = data
            if (status) {
                setShow(false)
            }
        }
        verify()
    }, [])


    const handleCardClick = async (id, category, name, price) => {
        setActiveCardId(prev => (prev === id ? null : id))
    }

    return (
        <>
            <div className="wrapper bg-[var(--background-color)] ">
                <Banner show={show} />
                <div className="page relative w-screen h-screen flex flex-col">
                    <h1 className="uppercase font-bold text-5xl text-center my-8">choose your fit</h1>
                    <div className="page1 w-[80%] mx-auto h-max flex flex-wrap gap-8 justify-center content-center p-4">
                        {
                            show ?
                                <h1 className="uppercase font-light text-3xl text-center my-8">please signup or login to see your collections</h1>
                                :
                                items.map((item) => {
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
                                            cartItems={userCartItems}
                                            setCartItems={setUserCartItems}
                                            wishlistedItems={wishlistedItems}
                                            setWishlistedItems={setWishlistedItems} />
                                    )
                                })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}