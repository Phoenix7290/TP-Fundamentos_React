function ListaTarefas () {
    const tarefas = [ "Comprar café", "Estudar React", "Fazer exercícios" ];
    return (
        <ol>
            {tarefas.map((tarefa, index) => (
                <li key={index}>{tarefa}</li>
            ))}
        </ol>
    )
}

export default ListaTarefas;