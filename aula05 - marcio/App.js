import logo from "./logo.svg";
import "./App.css";
import Contador from "./componentes/Contador";
import Cards from "./componentes/Cards";
import Display from "./componentes/Display";

function App() {
  return (
    <div className="App">
      {/* <Contador /> */}
      <Cards titulo="Meu primeiro CARD!!!">
        <h1> Maravilha</h1>
      </Cards>
    </div>
  );
}

export default App;
