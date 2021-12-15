export const GoToAdminHomePage = (navigate) => {
    navigate("/admin/trips/list")
}

export const GoToHomePage = (navigate) => {
    navigate("/")
}

export const GoToTripDetailsPage = (navigate, id) => {
    navigate(`/admin/trips/${id}`)
}

export const GoToLoginPage = (navigate) => {
    navigate("/login")

}
export const GoToCreateTripPage = (navigate) => {
    navigate("/admin/trips/create")
}