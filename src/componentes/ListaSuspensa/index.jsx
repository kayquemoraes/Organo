import './ListaSuspensa.css'
import '../CampoTexto/CampoTexto.css'
import '../Formulario'

const ListaSuspensa = (props) => {
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <select required={props.obrigatorio} value={props.valor} onChange={(e)=>props.setValor(e.target.value)}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa