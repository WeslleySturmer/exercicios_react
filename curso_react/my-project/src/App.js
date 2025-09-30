import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name = 'Weslley'
  
  return (
    <div className="App">
      <HelloWorld />
      <p>Olá, {name}</p>
    </div>
  );
}

export default App;
