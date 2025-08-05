import { useState } from "react"
import { postData } from "../../api"

export default function Login() {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)

    const [showPassword, setShowPassword] = useState(false)

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

    const handlePassword = (e) => {
        e.stopPropagation()
        setShowPassword(!showPassword)
    }

    return (
        <div className="wrapper w-screen h-screen flex items-center bg-[var(--background-color)] ">
            <form
                className="form w-max h-max border border-[#dadada] m-auto px-8 pb-16 rounded-2xl"
                onSubmit={handleForm}>
                <h1 className="uppercase font-bold text-[3vmax] leading-[3vmax] text-center py-8 font-[faroe]" >1shote</h1>
                <div className="mb-8">
                    <div className="flex items-center gap-4 text-xl border-b px-[1vmax] py-[0.5vmax] mb-[1vmax] ">
                        <i className="ri-user-line"></i>
                        <input
                            autoComplete="current-username"
                            placeholder="username"
                            className="outline-none placeholder:capitalize"
                            onChange={(e) => setUsername(e.target.value)}
                            name="username" type="text" />
                    </div>
                    <div className="flex items-center gap-4 text-xl border-b px-[1vmax] py-[0.5vmax] mb-[1vmax] ">
                        <i className="ri-lock-line"></i>
                        <input
                            autoComplete="current-password"
                            placeholder="password"
                            className="outline-none placeholder:capitalize"
                            onChange={(e) => setPassword(e.target.value)}
                            name="password" type={showPassword ? "text" : "password"} />
                        <button
                            type="button"
                            onClick={handlePassword}>
                            {
                                showPassword ? <i className="ri-eye-line"></i> : <i className="ri-eye-close-line"></i>
                            }
                        </button>
                    </div>
                </div>
                <input className="uppercase w-full font-bold bg-black text-white px-4 py-2" type="submit" value="login" />
            </form>
        </div>
    )
}