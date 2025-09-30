import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  return (
    <div className="App">
      <SayMyName name="Weslley" />
      <Pessoa nome="Weslley"
        idade="20"
        profissao="Programador"
        foto="https://placehold.co/400" 
      />
    </div>
  );
}

export default App;
