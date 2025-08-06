import { Navigate, useLocation } from "react-router-dom";
import { verifyUser } from "../../api";
import { useEffect, useState } from "react";

export default function PrivateRoute({ children }) {

    const location = useLocation()

    const [loading, setLoading] = useState(true)
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const data = await verifyUser()
                if (data.status) {
                    setAuthenticated(true)
                }
            } catch (error) {
                console.error(error.message)
                setAuthenticated(false)
            } finally {
                setLoading(false)
            }
        }
        checkAuthentication()
    }, [])

    if (loading) return <h1 className="uppercase font-light text-3xl text-center my-8">loading...</h1>

    return authenticated ? children : <Navigate to="/login" replace state={{ from: location }} />
}