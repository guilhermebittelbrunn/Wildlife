let Nome = document.querySelector('header h1')
let kg = document.getElementsByClassName('card')[0]
let age = document.getElementsByClassName('card')[1]
let imgs = document.getElementsByTagName('img')

function info(animal){
    Nome.innerText = animal.nome
    kg.children[0].innerText = animal.peso
    age.children[0].innerText = animal.idade
    for (let foto = 4; foto < imgs.length; foto++){
        imgs[foto].setAttribute('src', `images/jpg/${animal.id}${foto}.jpg`)
    }
}



let ps = document.getElementsByTagName('p')