import './CampoTexto.css'

export const CampoTexto = (props) => {

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input type={props.type} placeholder={props.placeholder} required={props.obrigatorio}   />
        </div>
    )

}