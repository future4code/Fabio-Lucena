import styled from "styled-components"
import React from "react"

const HeaderPrincipal = styled.header`
margin: 0;  
border: 2px solid darkgray; 
flex-grow: 0;
display: flex;
justify-content: center;

`


function Header() {
    return (
        <HeaderPrincipal>

            <p>Header</p>

        </HeaderPrincipal>
    )
}

export default Header;