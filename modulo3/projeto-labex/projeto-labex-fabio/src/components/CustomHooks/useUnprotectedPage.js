import { useEffect } from "react";
import { useNavigate } from "react-router";
import { GoToAdminHomePage } from "../../route/RouteFunctions";

const UseUnprotectedPage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            GoToAdminHomePage(navigate)
        }
    }, [navigate])
}

export default UseUnprotectedPage;