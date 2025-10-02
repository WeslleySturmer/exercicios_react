import { useState } from 'react';

import './App.css';
import Button from './components/Button'
import InputValor from './components/InputValor';

function App() {
  const [ valor, setValor ] = useState(0)
  const [ valorHop, setValorHop ] = useState(1)

  function aumentar(){
    setValor(valor + valorHop)
  }

  function diminuir(){
    setValor(valor - valorHop)
  }

  function zerar(){
    setValor(0)
  }



  return (
    <div className="App">
      <h1>Contador</h1>
      <span>{valor}</span>
      <div>
        <Button valor={valor} hop={valorHop} event={aumentar} name='Aumentar'/>
        <Button valor={valor} hop={valorHop} event={diminuir} name='Diminuir'/>
        <Button valor={valor} hop={valorHop} event={zerar} name='Zerar'/>
      </div>
      <InputValor onChangeHop={setValorHop}/>
    </div>
  );
}

export default App;
