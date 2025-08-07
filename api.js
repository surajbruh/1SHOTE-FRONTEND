const BASE_URL = import.meta.env.VITE_API_BASE_URL
// const BASE_URL = 'http://localhost:3000'

export default async function getData(endpoint) {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: 'GET',
        credentials: 'include'
    })

    if (!response.ok) {
        const error = await response.json()
            .catch(() => ({ message: "Unknown error" }))
        throw new Error(error.message || "Failed to fetch data")
    }
    return response.json()
}

export async function postData(endpoint, data) {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    //if response is json return json or else text
    const contentType = response.headers.get("Content-Type");
    const body = contentType && contentType.includes("application/json")
        ? await response.json()
        : await response.text();

    console.log(body)
    if (!response.ok) {
        return {
            status: false,
            message: body?.message || 'Something went wrong',
            error: body?.error || null
        }
    }

    return {
        status: true,
        ...body
    }
}

export async function removeData(endpoint) {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: 'DELETE',
        credentials: 'include',
    })

    if (!response.ok) {
        const error = await response.json()
            .catch(() => ({ message: "Unknown error" }))
        throw new Error(error.message || "Failed to delete data")

    }
    return response.json()
}

export async function verifyUser() {
    try {
        const response = await fetch(`${BASE_URL}/verify`, {
            method: 'GET',
            credentials: 'include'
        })
        const data = await response.json()

        return response.ok ? { ...data } : { message: data.message, status: false }

    } catch (error) {
        return ({
            message: error.message || "Network error",
            status: false
        })
    }

}