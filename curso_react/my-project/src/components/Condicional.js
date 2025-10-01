import { useState } from 'react'

function Condicional(){
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    function limparEmail(){
        setUserEmail('')
    }

    return(
        <div>
            <h2>Cadastre seu e-mail</h2>
            <form>
                <input type='email' placeholder='Digite seu e-mail' onChange={(e) => setEmail(e.target.value)}></input>
                <button type='submit' onClick={enviarEmail}>Enviar e-mail</button>
            </form>
            {userEmail && (
                <div>
                    <p>O email é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar Email</button>
                </div>
            )}
        </div>
    )
}

export default Condicional