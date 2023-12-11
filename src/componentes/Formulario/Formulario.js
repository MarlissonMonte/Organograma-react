import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import Botao from '../Botao/Botao'
import React, {useState } from 'react'

const Formulario = (props) => {

    /*const jogos =[
    'Aladdin',
    'Donkey Kong Country I',
    'Donkey Kong Country II',
    'Donkey Kong Country III',
    'Super Mario world',
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
    'Susetrider']*/

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card dos personagens</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome do personagem" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Descrição"
                    placeholder="Digite a descrição" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                /> 
                <div>
                    <ListaSuspensa 
                    obrigatorio={true}
                    label="Jogos" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                </div>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario