let array = []
Object.keys(localStorage).forEach(function (key) {
    document.querySelector('.tarefasList').innerHTML = `${document.querySelector('.tarefasList').innerHTML}<li class='itemTarefa'>${localStorage.getItem(key)}</li>`
});

document.querySelector('button.addRmv--tarefa').addEventListener('click', () => {
    let ultimoItem = document.querySelector('.writeList').value
    if (ultimoItem != '') {
        array.push(ultimoItem)
        localStorage.setItem(`${localStorage.length + 1}`, ultimoItem)
        document.querySelector('.tarefasList').innerHTML = `${document.querySelector('.tarefasList').innerHTML} <li class='itemTarefa'>${ultimoItem}</li>`
    } else {
        alert('Por favor, escreva algo.')
    }
    document.querySelector('.writeList').value = ''
})

document.querySelector('.addRmv--tarefa.removerTudo').addEventListener('click', () => {
    document.querySelector('.tarefasList').innerHTML = ''
    localStorage.clear()
})