const criarTarefa = (evento) => {

  evento.preventDefault()

  const input = document.querySelector("[data-form-input]")
  const valor = input.value

  const lista = document.querySelector("[data-list]")
  const tarefa = document.createElement("li")
  const conteudo = `<p class="content">${valor}</p>`
  tarefa.innerHTML = conteudo  

  lista.appendChild(tarefa)
  input.value = ""  

}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener("click", criarTarefa)