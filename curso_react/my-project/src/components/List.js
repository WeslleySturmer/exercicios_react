import Item from './Item'

function List(){
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Lamborghini" lancamento={2025}/>
                <Item marca="Audi" lancamento={2022}/>
                <Item marca="BWM" lancamento={2018}/>
            </ul>
        </>
    )
}

export default List