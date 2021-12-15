import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoToLoginPage } from "../../route/RouteFunctions";

const useProtectedPage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token === null) {
            GoToLoginPage(navigate)
        }
    }, [navigate])

}

export default useProtectedPage;