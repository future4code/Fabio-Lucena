import axios from "axios";


export const UseRequestData2 = (initialState, id)=>{
    axios
            .delete(`http://localhost:3003/participant/del/${id}`)
            .then((response) => {
                console.log("deletou")
            })
            .catch((error) => {
                console.log(error);
            });
}

