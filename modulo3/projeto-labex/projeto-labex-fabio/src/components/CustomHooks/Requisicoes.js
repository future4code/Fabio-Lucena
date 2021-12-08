import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

export const useRequestData = (url) => {
    const [data, setData] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const GetTrips = () => {
        setIsLoading(true);
        axios
            .get(url)
            .then((response) => {
                setData(response.data.trips);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
                setError(error);
            });
    };

    useEffect(() => {
        GetTrips();
    }, [url]);

    return [data, isLoading, error];
}

export const useRequestData2 = () => {
    
}