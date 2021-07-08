// Variáveis

let Nome = document.querySelector('header h1')
let kg = document.getElementsByClassName('card')[0]
let age = document.getElementsByClassName('card')[1]
let imgs = document.getElementsByTagName('img')
let ps = document.getElementsByTagName('p')
let ul = document.querySelector('.caracteristicas ul')
let toggle_btn = document.getElementsByClassName('toggle')[0]
let show = true
let menu = document.querySelector('.nav_bar')
let animals = document.getElementsByClassName('animals')[0]
let main_container = document.getElementsByTagName('main')[0]


// Função que da todas as informações a tela
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
    menu.setAttribute('class', 'nav_bar')
    animals.setAttribute('class', 'animals')
    console.log(this)
}

//Ativa o menu responsivo
toggle_btn.addEventListener('click', () =>{
    menu.classList.toggle('on')
    show = !show
})

// Normalizar o overflow nos links
function enable_overflow(){
    menu.setAttribute('class', 'nav_bar')
    document.body.style.overflow = false ? "hidden" : "auto"
}

//Abre a aba de animais
animals_btn = document.getElementById('animal').addEventListener('click', () =>{
    animals.setAttribute('class', 'animals on')
})

//Menu ghost (contato)
let ghost = document.getElementsByClassName('ghost')[0]
let main = document.getElementsByTagName('main')[0]
let teste = false

var ghost_disable = () =>{
    ghost.style.display = "none";
}
var ghost_enable = () =>{
    ghost.style.display = "block";
}
function show_ghost(){   
    animation()
    menu.setAttribute('class', 'nav_bar')
    ghost_enable()
}
function hidden_ghost(){
    animation()
    
    setTimeout(() => {
        ghost_disable()
    }, 600);
    show = true
}

// Animação
function animation(){
    ghost.classList.toggle('off', teste)
    teste = !teste
}

info(raposa)  //Inicia executando as informações da raposa
