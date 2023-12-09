import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import Botao from '../Botao/Botao'
import React, {useState } from 'react'

const Formulario = (props) => {

    const jogos =[
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
    'Susetrider']

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoPersonagemAdicionado({
            nome,
            descricao,
            imagem,
            jogos
    
        })
    }

    return (
        <section className="Formulario">
            <form onSubmit={aoSalvar}>
                <h2>
                    Preencha o formulario abaixo para criar o card
                </h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome " 
                    placeholder="Digite o nome do personagem"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Descrição " 
                    placeholder="Digite a descrição do personagem"
                    valor={descricao}
                    aoAlterado={valor => setDescricao(valor)}
                    />
                <CampoTexto
                    label="Imagem " 
                    placeholder="Insira o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                    />
                <section className="caixinha"> 
                    <ListaSuspensa obrigatorio={true} label="Jogo  " itens={jogos} />
                </section>
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )

}

export default Formulario 