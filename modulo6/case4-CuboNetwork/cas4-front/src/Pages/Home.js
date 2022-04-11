import Chart from "../components/graphic/Chart";
import Header from "../components/Header/Header";
import { ContainerPrincipal } from "./styled"

const Home = () =>{
    return(
        <ContainerPrincipal>
            <Header/>
            <Chart/>
        </ContainerPrincipal>
    )
}

export default Home;