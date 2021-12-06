import react from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import CardPessoas from './components/CardPessoas/CardPessoas';
import MatchCard from './components/MatchCard/MatchCard';
import './App.css';

function App() {
  const [cont, setCont] = useState(false)
  const [cont2, setCont2] = useState(false)
  const [profile, setProfile] = useState({})
  const [matches, setMatches] = useState([])

  const renderizaNaTela = (cont) => {
    if (cont === false) {
      return (
        <div>
          <CardPessoas
            getProfile={getProfile}
            profile={profile}
            aluno={aluno}
            disMatch={disMatch}
            choosePerson={choosePerson}
            alteraTela={alteraTela}
          />
        </div>
      )
    } else if (cont === true) {
      return (
        <div>
          <MatchCard
            matches={matches}
            getMatches={getMatches}
            Clear={Clear}
          />
        </div>
      )
    }
  }

  const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/"
  const aluno = "fabio"

  useEffect(() => {
    getProfile(aluno)
  }, [])

  useEffect(() => {
    getProfile(aluno)
  }, [cont2])

  const disMatch = () => {
    setCont2(!cont2)
  }

  const match = () => {
    setCont2(!cont2)
  }

  const alteraTela = () => {
    setCont(!cont)
  }

  const botaoTela = () => {
    if (cont === false) {
      return (<img className="BotaoPagina" src="https://cdn-icons.flaticon.com/png/512/3856/premium/3856668.png?token=exp=1638557808~hmac=47efb270e12fb40e79e23e39b7a5d056" onClick={alteraTela} />)
    } else if (cont === true) {
      return (<img className="BotaoPagina" src="https://cdn-icons.flaticon.com/png/512/2581/premium/2581577.png?token=exp=1638558542~hmac=c0a812f30311011c01a0952258109b26" onClick={alteraTela} />)
    }
  }


  const getProfile = async (aluno) => {
    try {
      const response = await axios.get(url + aluno + `/person`)
      setProfile(response.data.profile)
      console.log(profile)
    } catch (err) {
      console.log(err)
    }
  }

  const choosePerson = async (profileId, profileChoice) => {
    const body = {
      id: profileId,
      choice: profileChoice
    }
    try {
      const response = await axios.post(url + aluno + `/choose-person`,
        body,
        {
          headers: {
            ContentType: "application/json"
          }
        }
      )
      console.log(response.data)
      match()

    } catch (err) {
      console.log(err)
    }
  }

  const getMatches = async () => {
    try {
      const response = await axios.get(url + aluno + `/matches`)
      setMatches(response.data.matches)
    } catch (err) {
      console.log(err)
    }
  }

  const Clear = async () =>{
    try {
      const response = await axios.put(url + aluno + `/clear`,
        {
          headers: {
            ContentType: "application/json"
          }
        }
      )
      console.log(response.data)
      getMatches()
      
    } catch (err) {
      console.log(err)
    }
  }
  



  return (
    <div className="App">

      <header className="App-Header">
        {botaoTela()}
        <h1 className="App-Titulo">AstroMatch</h1>
      </header>

      {renderizaNaTela(cont)}

      <footer className="FooterBanininha">Banininha Group</footer>

    </div>
  );
}

export default App;
