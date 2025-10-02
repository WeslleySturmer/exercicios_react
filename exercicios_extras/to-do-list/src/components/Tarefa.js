function Tarefa({ tarefas }) {
    function marcaConcluido(){

    }

    return (
        <div>
            {tarefas.map((tarefa, index) => (
                <div key={index} className="tarefa-card">
                    <p>{tarefa}</p>
                    <button>🗑️</button>
                    <button>✔️</button>
                </div>
            ))}
        </div>
    )
}

export default Tarefa