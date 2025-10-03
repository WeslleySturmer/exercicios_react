function Saudacao({ nome }){
    return(
        <>
            <p>{
                nome.length == 0 ? ('Saudações desconhecido') : (`Saudações ${nome}`)
                }</p>
        </>
    )
}

export default Saudacao