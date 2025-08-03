import { useState } from "react"
import { postData } from "../../api"

export default function Login() {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)

    const handleForm = async (e) => {
        e.preventDefault()
        const form = {
            username,
            password
        }
        console.log(form)

        const data = await postData('/user/login', form)
        console.log(data)
    }
    return (
        <>
            <form onSubmit={handleForm}>
                <div className="w-max flex flex-col mb-2">
                    <label
                        className="uppercase"
                        htmlFor="username">username</label>
                    <input
                        className="outline-none border"
                        onChange={(e) => setUsername(e.target.value)}
                        name="username" type="text" />
                </div>
                <div className="w-max flex flex-col mb-2">
                    <label
                        className="uppercase"
                        htmlFor="password">password</label>
                    <input
                        className="outline-none border"
                        onChange={(e) => setPassword(e.target.value)}
                        name="password" type="text" />
                </div>
                <input className="uppercase font-bold bg-black text-white px-4 py-2" type="submit" value="login" />
            </form>
        </>
    )
}