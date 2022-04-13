import axios from "axios";
import { useEffect, useState } from "react";


export const UseRequestData = (initialState, body) => {
    // const [data, setData] = useState(initialState);

    
        
        axios
            .post("http://localhost:3003/participant/add", body,
            {
                headers: {
                    contentType: "application/json"
                }
            })
            .then((response) => {
                console.log("deu boa!")
            })
            .catch((error) => {
                console.log(error);
            });
   

    
    // return [data, AddData];
}