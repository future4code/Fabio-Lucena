import styled from "styled-components"
export const ContainerPrincipal = styled.div`
height: 100%;
font-family: 'Montserrat';
background-color: #454545;
`

export const Sidebar = styled.div`
height: 100vh;
width: 31.9vw;
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

export const Elipse = styled.div`
width: 111.2px;
height: 107.26px;
display: flex;
justify-content: center;
align-items: center;
background: url(${props => props.elipse});
`

export const Select = styled.select`
font-family: 'Montserrat';
font-style: normal;
width: 215.91px;
height: 45.2px;
position: absolute;
left: 6%;
right: 80.51%;
top: 8.52%;
bottom: 87.3%;
border-radius: 10px;
background: #FFFFFF;
`

export const Info = styled.p`
position: absolute;
left: 6%;
right: 77.69%;
top: 89.49%;
bottom: 8.59%;

font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;

color: #FFFFFF;
`

export const ConcInfo = styled.p`
position: absolute;
left: 6%;
right: 84.83%;
top: 86.76%;
bottom: 11.84%;

font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
letter-spacing: 0.135em;

color: #FFFFFF;
`
export const Results = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
height: 400px;
width: 1000px;
position: absolute;
left: 39.97%;
top: 45.18%;
/* background: #FFFFFF; */
`