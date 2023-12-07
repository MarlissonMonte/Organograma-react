import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    console.log(props.itens)

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select>
                {props.itens.map (itens =>{
                    return <option key={itens}> {itens}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa