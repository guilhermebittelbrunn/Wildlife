let Nome = document.querySelector('header h1')
let kg = document.getElementsByClassName('card')[0]
let age = document.getElementsByClassName('card')[1]
let imgs = document.getElementsByTagName('img')
let ps = document.getElementsByTagName('p')
let ul = document.querySelector('.caracteristicas ul')

function info(animal){
    let lista = []
    Nome.innerText = animal.nome
    kg.children[0].innerText = animal.peso
    age.children[0].innerText = animal.idade
    for (let foto = 4; foto < imgs.length; foto++){
        imgs[foto].setAttribute('src', `images/jpg/${animal.id}${foto}.jpg`)
    }
    for (let p = 2; p < ps.length; p++){
        var texto = 'texto' + p
        ps[p].innerHTML = animal[texto]
    }
    for (let item = 0; item < animal.caracteristicas.length; item++){
        lista.push(`<li>${animal.caracteristicas[item]}</li>`)
        ul.innerHTML = lista
    }
}

info(raposa)