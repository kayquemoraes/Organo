import CampoTexto from '../CampoTexto'
import './Formulario.css'

export const Formulario = (props) => {

    return (
        <section className='formulario'>
            <h2>{props.nome}</h2>
            <form>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
                <CampoTexto label="Time" placeholder="Nome" />
            </form>
            <button type='submit'>Criar Card</button>
        </section>
    )

}