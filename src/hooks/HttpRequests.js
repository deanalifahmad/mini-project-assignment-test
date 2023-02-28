import { useState, useEffect } from "react";
import axios from "axios";


export default function useFetch(url) {
    const [request, setRequest] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        setRequest({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
            .then(response => {
                setRequest({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() => {
                setRequest({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])

    return request;
    // const [data, setData] = React.useState(null);
    // const [loading, setLoading] = React.useState(true);

    // React.useEffect(() => {
    //     async function init() {
    //         const response = await fetch(url);
    //         const json = await response.json();
    //         setData(json);
    //         setLoading(false);
    //     }
    //     init();
    // }, [url]);

    // return { data, loading };
}