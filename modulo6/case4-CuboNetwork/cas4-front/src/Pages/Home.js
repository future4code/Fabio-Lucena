import Chart from "../components/graphic/Chart";
import Header from "../components/Header/Header";
import Table from "../components/Table/Table";
import { Container, ContainerPrincipal, ContainerTexto } from "./styled"

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
                <Chart />

            </Container>

        </ContainerPrincipal>
    )
}

export default Home;