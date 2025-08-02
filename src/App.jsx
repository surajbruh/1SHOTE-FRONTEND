import { useEffect, useState } from "react"
import getData, { postData } from "../api"
import Card from "./components/Card"
  import Banner from "./components/Banner"
import Checkout from "./components/checkout"

export default function App() {
  const [items, setItems] = useState([])
  const [activeCardId, setActiveCardId] = useState(null)

  useEffect(() => {
    async function data() {
      const data = await getData("/")
      setItems(data)
    }
    data()
  }, [])

  const handleCardClick = async (id, category, name, price) => {
    setActiveCardId(prev => (prev === id ? null : id))
    const data = await postData('/item', {
      category,
      name,
      price
    })
    console.log(data)
  }

  return (
    <>
      <div className="wrapper">
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
                  onCardClick={handleCardClick} />
              )
            })}
          </div>
        </div>
        <Checkout />
      </div>
    </>
  )
}