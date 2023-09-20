import './Time.css';

const Time = (props) => {

  return (
    <div>
        
        <section className="time" style={{backgroundColor: props.corSecundaria}}>
            <h3>{props.nome}</h3>
        </section>
    </div>
  );
};

export default Time;
