function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log("Cadastrou o usuário")
    }

    return (
        <div>
            <h2>Meu cadastro</h2>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" name="nome" placeholder="Nome"></input>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"></input>
                </div>
            </form>
        </div>
    )
}

export default Form