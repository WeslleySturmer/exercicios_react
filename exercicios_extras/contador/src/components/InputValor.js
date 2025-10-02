function InputValor({onChangeHop}) {
    function handleChange(event) {
        onChangeHop(Number(event.target.value))
    }

    return (
        <div>
            <input type="number" onChange={handleChange} defaultValue={1}></input>
        </div>
    )
    
}

export default InputValor