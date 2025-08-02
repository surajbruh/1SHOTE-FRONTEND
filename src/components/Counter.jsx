import { useState } from "react"

export default function Counter() {
    const [counter, setCounter] = useState(null)

    return (
        <>
            <div className="flex justify-center items-center gap-4">
                <button
                    onClick={() => setCounter(counter - 1)}
                    className="uppercase font-bold text-xl p-4 rounded-[50%] w-[30px] h-[30px] flex items-center justify-center ">
                    <i className="ri-subtract-line"></i>
                </button>
                <h1 className="uppercase text-xl">{counter ? counter : 0}</h1>
                <button
                    onClick={() => setCounter(counter + 1)}
                    className="uppercase font-bold text-xl p-4 rounded-[50%] w-[30px] h-[30px] flex items-center justify-center ">
                    <i className="ri-add-large-line"></i>
                </button>
            </div>
        </>
    )
}