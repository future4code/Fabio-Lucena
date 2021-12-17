import { useEffect } from "react";
import { useNavigate } from "react-router";
import { GoToFeedPage } from "../Routes/RouteFunctions";

const useUnprotectedPage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            GoToFeedPage(navigate)
        }
    }, [navigate])
}

export default useUnprotectedPage; 