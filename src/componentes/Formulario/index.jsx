import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import './Formulario.css'
import { useState } from 'react'

const Formulario = (props) => {

    const times = ["","Programação", "Front-End", "Data Science", "DevOps", "UX e Design", "Mobile", "Inovação e Gestão"]

    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [imagem, setImagem] = useState("")
    const [time, setTime]= useState("")

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log("Foi submetido",nome,cargo,imagem, time)
    }

    return (
        <section className='formulario'>
            <h2>{props.nome}</h2>
            <form onSubmit={aoSalvar}>
                <CampoTexto valor={nome} setValor={setNome} label="Nome" placeholder="Digite seu nome" type="text" obrigatorio={true} />
                <CampoTexto valor={cargo} setValor={setCargo} label="Cargo" placeholder="Digite seu cargo" type="text" obrigatorio={true} />
                <CampoTexto valor={imagem} setValor={setImagem} label="Imagem" placeholder="Informe o endereço da imagem" type="text" />
                <ListaSuspensa valor={time} setValor={setTime} label="Time" itens={times} obrigatorio={true}/>
                <Botao>
                Criar card
                </Botao>
            </form>
        </section>
    )

}

export default Formulario