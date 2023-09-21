import './Colaborador.css'

const Colaborador = ({nome, cargo, imagem, corDeFundo}) => {
    return(
        <div className='colaborador'>
            <div className='colaborador-cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='colaborador-rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador