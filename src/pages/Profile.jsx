import { useEffect, useState } from "react"
import getData from "../../api"

export default function Profile() {

    const [user, setUser] = useState({})

    useEffect(() => {
        async function fetchUser() {
            const data = await getData('/user')
            console.log(data)
            setUser(data)
        }
        fetchUser()
    }, [])

    return (
        <>
            <div className="wrapper w-full h-full px-8 py-4">
                <div >
                    <h1 className="uppercase font-bold text-5xl">{user.username ? user.username : "username goes here"}</h1>
                    <h1 className="uppercase font-light text-xl">{user.email ? user.email : "user's email goes here"}</h1>
                </div>
            </div>
        </>
    )
} 