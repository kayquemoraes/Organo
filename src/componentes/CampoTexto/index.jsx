import './CampoTexto.css'

const CampoTexto = (props) => {

    const aoDigitar = (evento) => {
        console.log(evento);
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input onChange={aoDigitar} type={props.type} placeholder={props.placeholder} required={props.obrigatorio} />
        </div>
    )

}

export default CampoTexto