import { useState } from 'react'

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(nome)
        console.log(`Usuário: ${nome} Senha: ${senha}`)
    }

    const [nome, setName] = useState()
    const [senha, setPassword] = useState()

    return (
        <div>
            <h2>Meu cadastro</h2>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text"
                        name="nome"
                        id="nome"
                        placeholder="Nome"
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="senha">Senha:</label>
                    <input type="password"
                        name="senha"
                        id="senha"
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Cadastrar"></input>
                </div>
            </form>
        </div>
    )
}

export default Form