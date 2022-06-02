import './App.css';
import OlaMundo from './components/OlaMundo.jsx';
import Contador from './components/Contador.jsx';

function App() {
  return (
    <div className="App">
      <OlaMundo nome='João da Silva'/>
      <Contador />   
    </div>
  );
}

export default App;
