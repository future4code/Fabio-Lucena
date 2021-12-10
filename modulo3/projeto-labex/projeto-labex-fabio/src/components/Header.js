import styled from "styled-components"
import React from "react"

const HeaderPrincipal = styled.header`
margin: 0;  
border: 2px solid darkgray; 
flex-grow: 0;
display: flex;
justify-content: center;
background-color: #3f3f42;
`


function Header() {
    return (
        <HeaderPrincipal>

            <h1>LabeX</h1>

        </HeaderPrincipal>
    )
}

export default Header;