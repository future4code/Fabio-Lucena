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
      return(
      <div>
        <button onClick={alteraTela}>matches</button>
        <CardPessoas
          getProfile={getProfile}
          profile={profile}
          aluno={aluno}
          disMatch={disMatch}
          choosePerson={choosePerson}
        />
      </div>
      )
    } else if (cont === true) {
      return (
        <div>
          <button onClick={alteraTela}>Pessoas</button>
          <MatchCard
          matches={matches}
          getMatches={getMatches}
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



  return (
    <div className="App">


      {renderizaNaTela(cont)}

    </div>
  );
}

export default App;
