function SeuNome({ setNome }){
    function changeHandler(e){
        setNome(e.target.value)
    }

    return(
        <div>
            <p>Digite seu nome:</p>
            <input type="text" onChange={changeHandler}></input>
        </div>
    )
}

export default SeuNome