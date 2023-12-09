import './CampoTexto.css'
import { useState } from 'react'

const CampoTexto = (props) => {

    // let valor = ''

    const [valor, setValor] = useState('')

    const aoDigitado = (evento) =>{
        setValor(evento.target.value)
        console.log(valor)
    }
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto