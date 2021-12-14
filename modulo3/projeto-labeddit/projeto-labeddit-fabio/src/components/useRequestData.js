import axios from "axios";
import { useState, useEffect } from "react";
import { URL_BASE } from "./urlBase";

export const useRequestData = (url) => {
    const [data, setData] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const GetPosts = () => {
        setIsLoading(true);
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
                console.log(error);
                setIsLoading(false);
                setError(error);
            });
    };

    useEffect(() => {
        GetPosts();
    }, [url]);

    return [data, isLoading, error, GetPosts];
}