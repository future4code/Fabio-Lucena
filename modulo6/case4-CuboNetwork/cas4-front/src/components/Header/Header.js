import React from "react";
import { HeaderPrincipal } from "./styled";

const Header = () => {
    return (
        <HeaderPrincipal>
            <form>
                <input placeholder="First Name" />
                <input placeholder="Last Name" />
                <input placeholder="Participation" />
            </form>

        </HeaderPrincipal>
    )
}

export default Header;