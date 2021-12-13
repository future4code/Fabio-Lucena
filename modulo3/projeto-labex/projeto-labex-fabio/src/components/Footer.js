import styled from "styled-components"
import React from "react"

const FooterPrincipal = styled.footer`
  margin: 0;
  border: 2px solid darkgray;   
  flex-grow: 0;
  display: flex;
  justify-content: center;
  background-color: #3f3f42;
 `


function Footer() {
    return (
        <FooterPrincipal>

            <p><b>Banininha Group</b></p>

        </FooterPrincipal>
    )
}

export default Footer;