import './ListaSuspensa.css'
import '../CampoTexto/CampoTexto.css'

export const ListaSuspensa = (props) => {
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}