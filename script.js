Nome = document.querySelector('header h1')
kg = document.getElementsByClassName('card')[0]
age = document.getElementsByClassName('card')[1]

function info(animal){
    Nome.innerText = animal.nome
    kg.children[0].innerText = animal.peso
    age.children[0].innerText = animal.idade
}
