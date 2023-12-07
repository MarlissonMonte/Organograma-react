import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import Botao from '../Botao/Botao'

const Formulario = () => {

    const jogos =
    ['Aladdin',
    'Donkey Kong Country I',
    'Donkey Kong Country II',
    'Donkey Kong Country III',
    'Super Bomberman',
    'Super Mario Kart',
    'The Legend of Zelda',
    'Mega Men X',
    'Mortal combat II',
    'Mortal combat III',
    'Street Fighter I',
    'Street Fighter II',
    'Final Fantasy III',
    'Final Fantasy IV',
    'Susetrider']

    return (
        <section className="Formulario">
            <form>
                <h2>
                    Preencha o formulario abaixo para criar o card
                </h2>
                <CampoTexto label="Nome " placeholder="Digite o nome do personagem" />
                <CampoTexto label="Descrição " placeholder="Digite a descrição do personagem" />
                <CampoTexto label="Imagem " placeholder="Insira o endereço da imagem" />
                <section className="caixinha"> 
                    <ListaSuspensa label="Jogo  " itens={jogos} />
                </section>
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )

}

export default Formulario 