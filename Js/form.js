/* 
const btnAdd = document.querySelector('.btn-add')
const btnClear = document.querySelector('.btn-clear')
const card = document.querySelector('form')

btnAdd.addEventListener('click', (e) =>{
  e.prevenDefault
  const cards= document.createElement('div')
  cards.innerHTML = 'Hola'
  card.appendChild(cards)
  
  console.log(card)
  
  }) 

  const arrayPokemon = []
sessionStorage.setItem('pokemon', JSON.stringify(arrayPokemon));

function addList (){
  const btnAddList = document.querySelector(".btn-add");
  btnAddList.addEventListener('click', (e) => {
    e.prevenDefault
    const cardPokemon = document.getElementById("name").value;
    const arrayString = sessionStorage.getItem('pokemon');
    let arrayPost = JSON.parse(arrayString)
    // const post = publicacion.value;
    arrayPost.push({id:arrayPost.length, pokemon});
    sessionStorage.setItem('pokemon', JSON.stringify(arrayPost));
    
    const cards= document.createElement('div')
    cards.appendChild(cardPokemon)
    
    card.appendChild(cards)
  })}
console.log(arrayPokemon)

*****************


const btnAdd = document.querySelector('.btn-add')
const btnClear = document.querySelector('.btn-clear')
const card = document.querySelector('form')

const arrPokemon = []

function arrayPokemon(){
  const cardPokemon = document.querySelector('#name').value
  arrPokemon.push(cardPokemon)
}

arrayPokemon()

  btnAdd.addEventListener('click', () =>{
  
    for (const cardPokemon of arrPokemon){
      const cards= document.createElement('div')
      cards.appendChild(cardPokemon)
      card.appendChild(cards)
      console.log(card)
    }
  }) */