import { useState } from "react"

function UiAdicionarTarefa({ event, tarefaAtual, setTarefaAtual }) {
    function handleChange(event) {
        setTarefaAtual(event.target.value)
    }

    return (
        <div>
            <input type="text" onChange={handleChange} value={tarefaAtual}></input>
            <input type="button" value="Adicionar" onClick={event}></input>
        </div>
    )
}

export default UiAdicionarTarefa