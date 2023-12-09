import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Jogos from './componentes/Jogos/Jogos';

function App() {

  const jogos = [{
    nome: 'Aladdin',
    corPrimaria: '#1645b9',
    corSecundaria: '#091e54'
  },
  {
    nome: 'Donkey Kong Country I',
    corPrimaria: '#b8260d',
    corSecundaria: '#861c0a'
  },
  {
    nome: 'Donkey Kong Country II',
    corPrimaria: '#7dbd01',
    corSecundaria: '#517a01'
  },
  {
    nome: 'Donkey Kong Country III',
    corPrimaria: '#ad9169',
    corSecundaria: '#705b3e'
  },
  {
    nome: 'Super Mario world',
    corPrimaria: '#f5d3b5',
    corSecundaria: '#ad9580'
  },
  {
    nome: 'Super Bomberman',
    corPrimaria: '#e85ed3',
    corSecundaria: '#a14392'
  },
  {
    nome: 'Super Mario Kart',
    corPrimaria: '#86d059',
    corSecundaria: '#1b2b10'
  },
  {
    nome: 'The Legend of Zelda',
    corPrimaria: '#41b3d1',
    corSecundaria: '#173b45'
  },
  {
    nome: 'Mega Men X',
    corPrimaria: '#43f615',
    corSecundaria: '#1a5b09'
  },
  {
    nome: 'Mortal combat II',
    corPrimaria: '#fa1280',
    corSecundaria: '#8f0c4a'
  },
  {
    nome: 'Mortal combat III',
    corPrimaria: '#ff0000',
    corSecundaria: '#6b0303'
  },
  {
    nome: 'Street Fighter I',
    corPrimaria: '#a9f2ef',
    corSecundaria: '#618786'
  },
  {
    nome: 'Street Fighter II',
    corPrimaria: '#f762f4',
    corSecundaria: '#943892'
  },
  {
    nome: 'Final Fantasy III',
    corPrimaria: '#feef4a',
    corSecundaria: '#6b651c'
  },
  {
    nome: 'Final Fantasy IV',
    corPrimaria: '#11f5e7',
    corSecundaria: '#086c66'
  },
  {
    nome: 'Susetrider',
    corPrimaria: '#a67437',
    corSecundaria: '#402c14'
  }]


  const [personagem, setPersonagem] = useState ([])

  const aoNovoPersonagemAdicionado = (personagem) =>{
    console.log(personagem)
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoPersonagemAdicionado={aoNovoPersonagemAdicionado}/>

      {jogos.map(jogo => <Jogos key={jogo.nome} nome={jogo.nome} corPrimaria={jogo.corPrimaria} corSecundaria={jogo.corSecundaria} />)}

    </div>
  );
}

export default App;
