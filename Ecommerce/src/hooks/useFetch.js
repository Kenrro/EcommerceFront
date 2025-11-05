import { useEffect, useState } from "react";

export const useFetch = ({url,
         method = "GET", 
         authorization = false,
         body = null,
         autoFetch = true}) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    const headers = {
        "Content-Type": "application/json"
    }
    const token = localStorage.getItem("user-token")
    if(authorization) headers["Authorization"] = `Bearer ${token}`

    async function getResponse(customBody = body) {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(url, {
                method,
                headers,
                body: customBody? JSON.stringify(customBody):undefined
            })

            const data = await response.json()
            if(!response.ok) throw new Error(data.message || JSON.stringify(data));
            console.log(data)
            setData(data)
            return data;
        } catch(err) {
            setError(err)
        } finally {
            setLoading(false);
        }
    }

    // Fetch automáticametne si autoFetch = true
    useEffect(()=> {
        if(autoFetch) {
            getResponse()
        }
    }, [url])

    return { data, loading, error, refetch: getResponse }
}