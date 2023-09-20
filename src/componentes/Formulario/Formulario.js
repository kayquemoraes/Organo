import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

export const Formulario = (props) => {

    const times = ["Programação", "Front-End", "Data Science", "DevOps", "UX e Design", "Mobile", "Inovação e Gestão"]

    return (
        <section className='formulario'>
            <h2>{props.nome}</h2>
            <form>
                <CampoTexto label="Nome" placeholder="Digite seu nome" type="text" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" type="text" />
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" type="text" />
                <ListaSuspensa label="Time" itens={times}/>
            </form>
            <button type='submit'>Criar Card</button>
        </section>
    )

}