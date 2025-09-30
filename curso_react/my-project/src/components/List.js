import Item from './Item'

function List(){
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Lamborghini"/>
                <Item marca="Audi"/>
                <Item marca="BWM"/>
            </ul>
        </>
    )
}

export default List