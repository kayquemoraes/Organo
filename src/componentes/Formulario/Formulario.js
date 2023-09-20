import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import './Formulario.css'

export const Formulario = (props) => {

    const times = ["Programação", "Front-End", "Data Science", "DevOps", "UX e Design", "Mobile", "Inovação e Gestão"]

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log("Form submetido");
    }

    return (
        <section className='formulario'>
            <h2>{props.nome}</h2>
            <form onSubmit={aoSalvar}>
                <CampoTexto label="Nome" placeholder="Digite seu nome" type="text" obrigatorio={true} />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" type="text" obrigatorio={true} />
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" type="text" />
                <ListaSuspensa label="Time" itens={times} obrigatorio={true}/>
                <Botao>
                Criar card
                </Botao>
            </form>
        </section>
    )

}