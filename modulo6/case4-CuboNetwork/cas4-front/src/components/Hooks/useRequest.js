import axios from "axios";


export const UseRequestData2 = (initialState, id)=>{
    axios
            .delete(`https://case4-cubo.herokuapp.com/participant/del/${id}`)
            .then((response) => {
                console.log("deletou")
            })
            .catch((error) => {
                console.log(error);
            });
}

