document.getElementById("bt_tarefa").addEventListener('click', addTarefa)

// inicializar uma lista vazia
// verificar se existe uma lista no local storage

// fazer um laçõ for pra cada tarefa, chamar a func addTarefa


let lista_tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

lista_tarefas.forEach(element => {
    criarElemento(element)
});

function addTarefa() {
    //pegar o valor de dentro do input
    const inputTarefa = document.getElementById("input_tarefa").value
    console.log(inputTarefa)
    // verificar o valor do input
    if (!inputTarefa) {
    }
    //adiciona tarefa no array de tarefa
    lista_tarefas.push(inputTarefa)
    //transforma o arrey em string e coloca a lista de tarefas no local storage
    localStorage.setItem("tarefas", JSON.stringify(lista_tarefas))
    criarElemento(inputTarefa)
}

function criarElemento(inputTarefa) {

    //Criar o elemento li
    const elemento_tarefa = document.createElement('li')
    elemento_tarefa.className = 'item_tarefa'
    //adicionar o texto do input no novo <li>
    const conteudoTarefa = document.createElement('p')
    conteudoTarefa.textContent = inputTarefa
    // adicionar um botão para deletar tarefa no novo <li>
    const botaoDeletar = document.createElement('button')
    botaoDeletar.textContent = 'Deletar Tarefa'
    botaoDeletar.addEventListener('click', () => {
        elemento_tarefa.remove()
        //filtra a tarefa a ser removida

        lista_tarefas = lista_tarefas.filter((tarefa) => tarefa !== inputTarefa)
        //salva novamente a lista de tarefas no local storage

        localStorage.setItem("tarefas", JSON.stringify(lista_tarefas))

    })
    // adicionar um botão para completar a tarefa no <li>
    const botaoCompletar = document.createElement('button')
    botaoCompletar.textContent = 'Completar Tarefa'
    botaoCompletar.addEventListener('click', () => {
        conteudoTarefa.classList.toggle('completado')
    })
    //adicionar o novo elemento <li> e tag <ul>
    elemento_tarefa.appendChild(conteudoTarefa)
    elemento_tarefa.appendChild(botaoDeletar)
    elemento_tarefa.appendChild(botaoCompletar)
    document.getElementById("lista_tarefas").appendChild(elemento_tarefa)
}

