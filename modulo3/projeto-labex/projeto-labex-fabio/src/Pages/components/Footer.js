import styled from "styled-components"
import React from "react"

const FooterPrincipal = styled.footer`
  margin: 0;
  border: 2px solid darkgray;   
  flex-grow: 0;
  display: flex;
  justify-content: center;
 `


function Footer() {
    return (
        <FooterPrincipal>

            <p>Banininha Group</p>

        </FooterPrincipal>
    )
}

export default Footer;