import axios from "axios";
import { useState, useEffect } from "react";
import { URL_BASE } from "./urlBase";

export const useRequestData = (initialState, setIsLoading, url) => {
    const [data, setData] = useState(initialState);
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState("");

    const GetPosts = () => {
        
        axios
            .get(url, {
                headers: {
                    ContentType: "application/json",
                    Authorization: localStorage.getItem("token")
                }
            })
            .then((response) => {
                setData(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                // setError(error);
            });
    };

    useEffect(() => {
        GetPosts();
    }, []);

    return [data, GetPosts]
    //  isLoading, error, GetPosts];
}