import './Time.css';
import TimeH3 from '../style'

const Time = (props) => {

  return (

      <section className="time" style={{backgroundColor: props.corSecundaria}}>
        <TimeH3 corPrimaria={props.corPrimaria}>
          <h3>{props.nome}</h3>
        </TimeH3 >
      </section>

  );
};

export default Time;
