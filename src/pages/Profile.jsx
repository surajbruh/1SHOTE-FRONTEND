import { useEffect, useState } from "react"
import getData from "../../api"
import { useNavigate } from "react-router-dom"

export default function Profile() {

    const [user, setUser] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchUser() {
            const data = await getData('/user')
            console.log(data)
            setUser(data)
        }
        fetchUser()
    }, [])

    const handleLogout = async () => {
        const data = await getData('/user/logout')
        navigate('/')
    }

    return (
        <>
            <div className="wrapper w-full h-full px-8 py-4">
                <div className="mb-4" >
                    <h1 className="uppercase font-bold text-5xl">{user.username ? user.username : "username goes here"}</h1>
                    <h1 className="uppercase font-light text-xl">{user.email ? user.email : "user's email goes here"}</h1>
                </div>
                <button
                    onClick={handleLogout}
                    className="uppercase w-max font-bold bg-black text-white px-4 py-2">logout</button>
            </div>
        </>
    )
} 