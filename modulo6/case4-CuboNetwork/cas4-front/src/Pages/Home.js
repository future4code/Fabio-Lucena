import { useEffect, useState } from "react";
import ChartGraphic from "../components/graphic/ChartGraphic";
import Header from "../components/Header/Header";
import Table from "../components/Table/Table";
import { Container, ContainerPrincipal, ContainerTexto } from "./styled"
import axios from "axios";
import { useRequestData } from "../components/Hooks/useRequest";

const Home = () => {
    

    return (
        <ContainerPrincipal>
            <Header />
            <ContainerTexto>
                <h2>DATA</h2>
                <p>Lorem Ipsum ronaldo</p>
            </ContainerTexto>

            <Container>

                <Table />
                {/* <ChartGraphic /> */}

            </Container>

        </ContainerPrincipal>
    )
}

export default Home;