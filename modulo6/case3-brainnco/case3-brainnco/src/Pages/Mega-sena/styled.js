import styled from "styled-components"
export const ContainerPrincipal = styled.div`
height: 100%;
font-family: 'Montserrat';
`

export const Sidebar = styled.div`
height: 100vh;
width: 28.7vw;
background: url(${props => props.sidebarColor});
`

export const Loteria = styled.p`
position: absolute;
left: 10%;
right: 73.57%;
top: 45.43%;
bottom: 48.52%;

font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 37px;

color: #FFFFFF;
`
export const Trevo1 = styled.img`
position: absolute;
left: 5.99%;
right: 90.31%;
top: 47.41%;
bottom: 47.47%;

/* background: black; */
`
export const Trevo2 = styled.img`
position: absolute;
left: 5.99%;
right: 90.31%;
top: 47.41%;
bottom: 47.47%;

/* background: #FFFFFF; */
`