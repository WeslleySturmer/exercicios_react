import Button from "./Button"

function Evento() {

    function meuEvento() {
        console.log("Primeiro evento")
    }

    function segundoEvento() {
        console.log("Segundo evento")
    }

    return (
        <div>
            <p>Clique para dispara um evento</p>
            <Button event={meuEvento} text="Primeiro evento"/>
            <Button event={segundoEvento} text="Segundo evento"/>
        </div>
    )
}

export default Evento