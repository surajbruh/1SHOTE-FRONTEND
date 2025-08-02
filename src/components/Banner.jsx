import Navbar from "./Navbar"

export default function Banner() {
    return (
        <>
            <div className="banner bg-[#f2ecec] w-screen h-screen">
                <Navbar />
                <div className="w-full h-full flex gap-8 px-8 items-center">
                    <div>
                        <div className="w-max mb-8">
                            <h1 className="uppercase w-max font-bold text-9xl leading-[110px] ">reflect</h1>
                            <h1 className="uppercase w-max font-bold text-9xl leading-[110px] translate-x-[30%] ">youself</h1>
                        </div>
                        <div className="flex gap-4 ">
                            <button className="uppercase border-2 border-white font-bold text-2xl px-4 py-2 bg-black text-white">shop now</button>
                            <button className="uppercase border-2 font-bold text-2xl px-4 py-2 bg-white">explore products</button>
                        </div>
                    </div>
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="relative">
                            <div
                                className="new-card p-2 w-[20vmax] min-w-[250px] h-max bg-[#e1e1e1] translate-x-[50%] translate-y-[-30%] rotate-[20deg] ">
                                <div className="image w-full h-[18vmax] min-h-[250px] mb-[3vmax] ">
                                    <img
                                        className="w-full h-full object-center object-cover"
                                        src={"https://i.pinimg.com/1200x/bf/1e/2c/bf1e2c0acca6c608e6cdb362efd9e657.jpg"} alt="" />
                                </div>
                            </div>
                            <div
                                className="absolute rotate-[-15deg] top-0 new-card p-2 w-[20vmax] min-w-[250px] h-max bg-[#e1e1e1]">
                                <div className="image w-full h-[18vmax] min-h-[250px] mb-[3vmax] ">
                                    <img
                                        className="w-full h-full object-center object-cover"
                                        src={"https://i.pinimg.com/1200x/48/1e/8f/481e8fef0d2c6142b034daa6a55890ad.jpg"} alt="" />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}