import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {
  return (
    <div className="App">
      <Banner />
      <Formulario nome="Preencha os dados para criar o card do colaborador." />
    </div>
  );
}

export default App;
