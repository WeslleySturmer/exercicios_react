import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List'

function App() {
  return (
    <div className="App">
      <Frase />
      <SayMyName name="Weslley" />
      <Pessoa nome="Weslley"
        idade="20"
        profissao="Programador"
        foto="https://placehold.co/400" 
      />

      <List />
    </div>
  );
}

export default App;
