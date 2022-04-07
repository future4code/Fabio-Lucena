import styled from "styled-components"
import { screen } from "@testing-library/react";
import { fundo } from "./HomePage";

export const ContainerPrincipal = styled.div`

    font-family: 'Montserrat';
    background-color: #dbdbdb;
`

export const Sidebar = styled.div`
    height: 100vh;
    width: 31.9vw;
    background: url(${props => props.sidebarColor});
@media (min-device-width: 1500px) and (max-device-width: 1881px) {
    width: 32.6vw;
}

@media (min-device-width: 1000px) and (max-device-width: 1499px) {
    width: 40.9vw;
}

@media (min-device-width: 370px) and (max-device-width: 999px) {
    display:flex;
    flex-direction: row;
    height: 1218.48px;
    width: 612px;
    transform: rotate(90deg);
    position: absolute;
    bottom: -8%;
    left: 11%;
}
`

export const Loteria = styled.p`
    position: absolute;
    left: 10%;
    right: 73.57%;
    top: 45.43%;
    bottom: 48.52%;
    height: 50px;
    width: 300px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 37px;
    background-color: transparent;
    color: #FFFFFF;
@media (min-device-width: 370px) and (max-device-width: 999px) {
    height: 37px;
    width: 250px;
    position: absolute;
    left: 36%;
    top: 42.5%;
    font-size: 36px;
    font-weight: 700 bold;
    transform: rotate(-90deg);
    text-align: center;
}

`
// 

export const Trevo1 = styled.img`
    position: absolute;
    left: 5.99%;
    right: 90.31%;
    top: 44.41%;
    bottom: 49.47%;
    height: 55.31px;
    width: 59.29px;
    background-color: transparent;
@media (min-device-width: 370px) and (max-device-width: 999px) {
    height: 67px;
    width: 65px;
    /* position: relative;     */
     position: absolute;
    left: 40%;
    top: 41%; 
    transform: rotate(-90deg);
}
`
export const Trevo2 = styled.img`
    position: absolute;
    left: 5.99%;
    right: 90.31%;
    top: 44.41%;
    bottom: 49.47%;
    height: 55.31px;
    width: 59.29px;
    background-color: transparent;
@media (min-device-width: 370px) and (max-device-width: 999px) {
    height: 67px;
    width: 65px;
    /* position: relative; */
    position: absolute;
    left: 40%;
    top: 41%; 
    transform: rotate(-90deg);
}
`

export const Elipse = styled.div`
    width: 111.2px;
    height: 107.26px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 27px;
    background: url(${props => props.elipse});
@media (min-device-width : 370px) and (max-device-width: 999px) {
    width: 111.2px;
    height: 107.26px;
}
`

export const Select = styled.select`
    font-family: 'Montserrat';
    font-style: normal;
    width: 11.4vw;
    height: 2.3vw;
    position: absolute;
    left: 6%;
    right: 80.51%;
    top: 8.52%;
    bottom: 87.3%;
    border-radius: 10px;
    text-align: center;
    background: #FFFFFF;
@media (min-device-width : 370px) and (max-device-width: 999px) {
    position: absolute;
    left: 1%;
    top: 41%;
    bottom: 87.38%;
    /* position: relative; */
    width: 240px;
    height: 51px;
    font-size: 15px;
    transform: rotate(-90deg);
}

`

export const Info = styled.p`
    position: absolute;
    left: 6%;
    right: 77.69%;
    top: 89.49%;
    bottom: 8.59%;
    height: 50px;
    width: 200px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    background-color: transparent;
    color: #FFFFFF;
@media (min-device-width: 370px) and (max-device-width: 999px) {
    height: 37px;
    width: 250px;
    position: absolute;
    left: 49%;
    top: 42.5%;
    font-size: 20px;
    transform: rotate(-90deg);
    text-align: center;
}
`

export const ConcInfo = styled.p`
    position: absolute;
    left: 6%;
    right: 84.83%;
    top: 86.76%;
    bottom: 11.84%;
    height: 30px;
    width: 200px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.135em;
    background-color: transparent;
    color: #FFFFFF;
`
export const Results = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    height: 400px;
    width: 55vw;
    position: absolute;
    left: 39.97%;
    top: 45.18%;
   
@media (min-device-width: 370px) and (max-device-width: 999px) {
    justify-content: space-evenly;
    align-items: center;
    height: 400px;
    width: 458px;
    position: absolute;
    left: 99%;
    top: 27.5%;
    font-size: 14px;
    transform: rotate(-90deg);
    text-align: center;
}
`

export const Aviso = styled.p`
    position: absolute;
    left: 47.62%;
    right: 11.75%;
    top: 89.17%;
    bottom: 8.98%;
    height: 50px;
    width: 700px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #000000;

@media (min-device-width: 370px) and (max-device-width: 999px) {
    justify-content: space-evenly;
    align-items: center;
    height: 50px;
    width: 700px;
    position: absolute;
    left: 170%;
    top: 37.5%;
    font-size: 20px;
    transform: rotate(-90deg);
    text-align: center;
}
`