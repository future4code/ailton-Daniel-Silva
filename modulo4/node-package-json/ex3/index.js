const toDoList = [
    'Arrumar a cama ',
    'Alimentar o cachorro '
]

toDoList.push(process.argv[2])

console.log("Lista de tarefas:", toDoList)