import './Rodape.css'

const Rodape = () => {
    return (
        <section className='rodape'>
            <div className='icons'>
                <ul>
                    <li>
                        <a href="https://facebook.com" target="_blank">
                            <img src="/imagens/fb.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com" target="_blank">
                            <img src="/imagens/tw.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com" target="_blank">
                            <img src="/imagens/ig.png" alt="" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className='logo'>
                <img src="/imagens/logo.png" alt="Logo Organo" />
            </div>
            <div className='texto'>
                <p>Desenvolvido por Kayque.</p>
            </div>
        </section>        
    )
}

export default Rodape