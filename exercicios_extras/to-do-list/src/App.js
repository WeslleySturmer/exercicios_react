import { useState } from 'react';
import './App.css';
import UiAdicionarTarefa from './components/UiAdicionarTarefa';
import Tarefa from './components/Tarefa';

function App() {
  let [tarefas, setTarefas] = useState([])
  const [tarefaAtual, setTarefaAtual] = useState('')

  function adicionarTarefa() {
    const texto = tarefaAtual.trim()
    if (!texto) return

    setTarefas(prev => [...prev, texto])
    setTarefaAtual('')
  }

  return (
    <div className="App">
      <h1>Teste</h1>

      <UiAdicionarTarefa
        event={adicionarTarefa}
        setTarefaAtual={setTarefaAtual}
        value={tarefaAtual} />

      <Tarefa tarefas={tarefas} />
    </div>
  );
}

export default App;
