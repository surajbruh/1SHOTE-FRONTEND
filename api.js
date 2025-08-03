const BASE_URL = "http://localhost:3000"

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
    if (contentType && contentType.includes("application/json")) {
        return response.json();
    } else {
        return response.text();
    }
}

export async function removeData(endpoint, data) {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    if (!response.ok) {
        const error = await response.json()
            .catch(() => ({ message: "Unknown error" }))
        throw new Error(error.message || "Failed to delete data")

    }
    return response.json()
}