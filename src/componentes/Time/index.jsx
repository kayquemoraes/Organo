import './Time.css';
import TimeH3 from '../style'
import Colaborador from '../Colaborador';

const Time = (props) => {

  return (


      (props.colaboradores.length > 0) ? <section className="time" style={{backgroundColor: props.corSecundaria}}>
        <TimeH3 corPrimaria={props.corPrimaria}>
          <h3>{props.nome}</h3>
        </TimeH3 >
        <div className='colaboradores'>
          {props.colaboradores.map(
            colaborador => <Colaborador 
            corDeFundo={props.corPrimaria}
            nome={colaborador.nome} 
            cargo={colaborador.cargo} 
            imagem={colaborador.imagem}
            key={colaborador.nome}
            />)}
        </div>
        </section>
        :''

  );
};

export default Time;
