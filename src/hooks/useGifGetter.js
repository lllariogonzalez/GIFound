import { useState } from "react";
import { useEffect } from "react";
import { get } from "../helpers/fetchHelper";

export const useGifGetter = (keyword, limit = 10, offset = 0) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                let URL = `https://api.giphy.com/v1/gifs/search?api_key=fiog0go38CpXMAgAlcG3BXMPNltyfBPv&q=${keyword}&limit=${limit}&offset=${offset}&rating=g&lang=en`;
                let response = await get(URL);
                if (
                    response.meta &&
                    response.meta.status &&
                    response.meta.status === 200
                ) {
                    //! console.log(response.data);
                    setData(response.data);
                    setPagination(response.pagination);
                    setError(false);
                } else {
                    //! console.log("error:", response);
                    setError(response);
                }
                setLoading(false);
            } catch (err) {
                //! console.log("error:", error);
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [keyword]);

    return [data, error, loading, pagination];
};
