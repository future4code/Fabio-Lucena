import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import styled from 'styled-components'

const CardBigDiv = styled.div`
.bigcard-container > div {
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
}

.bigcard-container {
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 200px;
}

.bigcard-container > img {
  width: 70px;
  margin-right: 10px;
  border-radius: 50%;
}

.bigcard-container h4 {
  margin-bottom: 15px;
}
`

const CardLittleDiv = styled.div`
.littlecard-container {
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  /* height: 200px; */
}

.littlecard-container > img {
  width: 35px;
  margin-right: 10px;
  border-radius: 50%;
}

.littlecard-container h4 {
  margin-bottom: 5px;
}

.littlecard-container > div {
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
}
`

const ImagemBotao = styled.div`
.image-button-container {
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 50px;
  width: 200px;
  padding: 15px 30px;
  margin: 10px auto;
}

.image-button-container > img {
  width: 30px;
  margin-right: 10px;
}
`





function App() {

  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>

        <CardBigDiv>
          <CardGrande
            imagem="https://scontent.fbfh3-3.fna.fbcdn.net/v/t1.6435-9/80600397_2688623447886722_6540965802869260288_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeElDMz6R2_CmddreWIPCI2GfDLt11b0R0d8Mu3XVvRHRzfDGRP2CL1B8eJlPB-tXMQ7osH2Og17uDXQ35WuFJSl&_nc_ohc=SaeIVZRUZFgAX_SPwil&_nc_ht=scontent.fbfh3-3.fna&oh=d23337ad9186a24a27302477d2263746&oe=61A88356"
            nome="Fábio Lucena de Oliveira"
            descricao="Oi, eu sou o Fábio. Sou estudante da Labenu. Quero me tornar um Dev Full Stack, por isso estou ralando aqui na Labenu!"
          />
        </CardBigDiv>

        <ImagemBotao>
          <ImagemButton
            imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
            texto="Ver mais"
          />
        </ImagemBotao>


        <CardLittleDiv>
          <CardPequeno
            imagem="https://cdn.icon-icons.com/icons2/2131/PNG/512/email_mesasge_envelope_icon_131541.png"
            descricao="Email: "
            nome="fabio@lucena.com"
          />

          <CardPequeno
            imagem="https://w7.pngwing.com/pngs/583/119/png-transparent-computer-icons-map-desktop-wallpaper-map-address.png"
            descricao="Endereço: "
            nome="Rua Rebouças, 444, Curitiba-PR"
          />
        </CardLittleDiv>
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardBigDiv>
          <CardGrande
            imagem="https://www.thechurchnews.com/pt/wp-content/uploads/sites/2/2020/04/symbol1.png"
            nome="Igreja de Jesus Cristo"
            descricao="Serviço voluntário em escritório, secretário."
          />

          <CardGrande
            imagem="https://logodownload.org/wp-content/uploads/2014/05/banco-do-brasil-logo-0-2048x2048.png"
            nome="PHRH"
            descricao="Agente administrativo no Banco do Brasil"
          />
        </CardBigDiv>
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>

        <ImagemBotao>
          <ImagemButton
            imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
            texto="Facebook"
          />

          <ImagemButton
            imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
            texto="Twitter"
          />
        </ImagemBotao>

      </div>
    </div>
  );
}

export default App;
