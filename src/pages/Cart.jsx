import Counter from "../components/Counter"
import { Link } from "react-router-dom"

export default function Cart() {

    return (
        <>
            <div className="checkout w-screen h-screen px-8 flex flex-col justify-center">
                <div className="uppercase font-bold flex items-center justify-between mb-16">
                    <h1 className="text-5xl leading-[30px]">my cart</h1>
                    <Link to="/">
                        <div className="w-max flex justify-center items-center gap-4 px-8 py-2 rounded-[50px] h-max bg-black active:bg-[#242424] text-white ">
                            <i className="ri-arrow-left-s-line text-2xl"></i>
                            <div className="uppercase text-xl">continue shopping</div>
                        </div>
                    </Link>
                </div>
                <table className="w-full mb-8">
                    <thead className="uppercase font-bold text-xl">
                        <tr>
                            <th scope="col">item</th>
                            <th scope="col">price</th>
                            <th scope="col">qty</th>
                            <th scope="col">total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t">
                            <td className="w-[30%] h-[10vmax] px-2 py-4">
                                <div className="flex gap-4 p-2">
                                    <div className="image min-w-[8vmax] h-[8vmax] overflow-hidden ">
                                        <img
                                            className="w-full h-full object-center object-cover"
                                            src={"https://i.pinimg.com/1200x/31/b6/49/31b6499abddbc488722d8aabb7336cc7.jpg"} alt="" />
                                    </div>
                                    <div className="uppercase w-full h-full py-2">
                                        <h1 className="font-semibold">product name</h1>
                                        <h1 className="font-light">product category</h1>
                                    </div>
                                </div>
                            </td>
                            <td className="w-[15%] h-[10vmax] px-2 py-4 ">
                                <div className="py-2 w-full h-full flex items-center justify-center">
                                    <h1 className="uppercase font-semibold text-xl">$699</h1>
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
                        <tr className="border-t">
                            <td className="w-[30%] h-[10vmax] px-2 py-4">
                                <div className="flex gap-4 p-2">
                                    <div className="image min-w-[8vmax] h-[8vmax] overflow-hidden ">
                                        <img
                                            className="w-full h-full object-center object-cover"
                                            src={"https://i.pinimg.com/1200x/31/b6/49/31b6499abddbc488722d8aabb7336cc7.jpg"} alt="" />
                                    </div>
                                    <div className="uppercase w-full h-full py-2">
                                        <h1 className="font-semibold">product name</h1>
                                        <h1 className="font-light">product category</h1>
                                    </div>
                                </div>
                            </td>
                            <td className="w-[15%] h-[10vmax] px-2 py-4 ">
                                <div className="py-2 w-full h-full flex items-center justify-center">
                                    <h1 className="uppercase font-semibold text-xl">$699</h1>
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
                    </tbody>
                </table>

                <div className="bg-[#dadada] p-8 rounded-[1vmax] flex justify-between">
                    <div>
                        <h1 className="uppercase mb-4 font-semibold text-2xl">choose shipping mode</h1>
                        <ul>
                            <li className="mb-2">
                                <div className="flex gap-2 items-center font-medium uppercase">
                                    <input
                                        className=""
                                        type="checkbox" name="" id="" />
                                    <h1>store pickup</h1>
                                    <h1 className="text-[14px] ">(in 20min) </h1>
                                    <h1 className="text-[14px] ">free</h1>
                                </div>
                            </li>
                            <li className="mb-2">
                                <div className="flex gap-2 items-center font-medium uppercase">
                                    <input
                                        className=""
                                        type="checkbox" name="" id="" />
                                    <h1>delivery at home</h1>
                                    <h1 className="text-[14px] ">(in 45min) </h1>
                                    <h1 className="text-[14px] ">$10</h1>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className=" w-max flex flex-col items-center justify-center">
                        <table className="w-full h-max mb-4">
                            <tbody className="font-semibold flex flex-col w-full p-2">
                                <tr className="uppercase mb-2 w-full flex justify-between">
                                    <td>subtotal:</td>
                                    <td>$699</td>
                                </tr>
                                <tr className="uppercase mb-2 w-full flex justify-between">
                                    <td>shipping:</td>
                                    <td>free</td>
                                </tr>
                            </tbody>
                            <tfoot className="font-semibold flex flex-col w-full p-2 border-t">
                                <tr className="uppercase mb-2 w-full flex justify-between">
                                    <td>total</td>
                                    <td>$699</td>
                                </tr>
                            </tfoot>
                        </table>
                        <div className="uppercase font-bold bg-red-500 text-2xl text-white px-10 py-2 w-max flex gap-4">
                            <h1>checkout</h1>
                            <h1>$699</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}