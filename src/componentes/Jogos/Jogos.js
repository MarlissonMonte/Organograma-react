import './Jogos.css'

const Jogos = (props) => {
    return (
        <section className='Jogos'style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{borderColor : props.corPrimaria }}> {props.nome}</h3>
            
        </section>
    )
}

export default Jogos