function ProjectForm(){
    return (
        <form>
            <div><input type="text" placeholder="Insira o nome do projeto"></input></div>
            <div><input type="number" placeholder="Insira o orçamento do projeto"></input></div>
            <div>
                <select>
                    <option disabled>Selecione a categoria</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Criar projeto"></input>
            </div>
        </form>
    )
}

export default ProjectForm