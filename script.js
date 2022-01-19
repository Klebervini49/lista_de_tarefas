let array = []
Object.keys(localStorage).forEach(function (key) {
    document.querySelector('.tarefasList').innerHTML += `<div><label class='itemTarefa'>${localStorage.getItem(key)}</label></div>`

});

document.querySelector('button.addRmv--tarefa').addEventListener('click', () => {
    let ultimoItem = document.querySelector('.writeList').value
    if (ultimoItem != '') {
        array.push(ultimoItem)
        localStorage.setItem(`${localStorage.length + 1}`, ultimoItem, 'eae')
        document.querySelector('.tarefasList').innerHTML += `<div class='tarefa${localStorage.length}'><label for"${localStorage.length+1}" class='itemTarefa'>${ultimoItem}</label></div>`
    } else {
        alert('Por favor, escreva algo.')
    }
    document.querySelector('.writeList').value = ''
})

document.querySelector('.addRmv--tarefa.removerTudo').addEventListener('click', () => {
    document.querySelector('.writeList').value = ''
    document.querySelector('.tarefasList').innerHTML = ''
    localStorage.clear()
})