const axios = require('axios');

let inputPokemon;
let buttonSearch;
let containerPokemon;
let btnAddFavouriteList;
let btnClearInputPokemon;

function getPokemon(pokemon) {
  return axios.get('http://localhost:3000/api/pokemon/' + pokemon)
    .then((res) => {
        const data = res.data;
        createPokemon(data);
      return data; // Devuelve los datos de Pokemon
    })
    .catch((error) => {
      console.log(error);
    })
}
console.log('pika')

function createPokemon(pokemon) {
  
    const arr = {
        img: pokemon.sprites.front_default,
        name: pokemon.name,
        idItem: pokemon.id
    }
    const img = document.createElement('img')
    const h3 = document.createElement('h3')
    const div = document.createElement('div')
    
    img.src = pokemon.sprites.front_default
    img.classList.add('imgPokemon')
    h3.textContent = pokemon.name
    h3.classList.add('name')
    div.classList.add('cardPokemon')
    div.id = pokemon.id
  
    div.appendChild(img)
    div.appendChild(h3)
    
    containerPokemon.innerHTML = ''
    containerPokemon.appendChild(div)
    arrPokemon.push(arr)
}
    
document.addEventListener('DOMContentLoaded', () => {
        
if (typeof document !== 'undefined') {
    inputPokemon = document.querySelector('.search-container__input-pokemon')
    buttonSearch = document.querySelector('.search-container__btn-search')
    containerPokemon = document.querySelector('.container__container-pokemon')
    btnAddFavouriteList = document.querySelector('.btn-add')
    btnClearInputPokemon = document.querySelector('.btn-clear')
}
    
    buttonSearch.addEventListener('click', (e) => {
        e.preventDefault()
        getPokemon(inputPokemon.value.toLowerCase())
    })

    let arrPokemon = [];
    document.addEventListener('DOMContentLoaded', getStorage)


    btnAddFavouriteList.addEventListener('click', (e) => {
        e.preventDefault()
        addList(arrPokemon)
        storagePokemon(arrPokemon)
    })

    btnClearInputPokemon.addEventListener('click', (e) => {
        e.preventDefault
        containerPokemon.innerHTML = ''
        inputPokemon.value = ''
    })

    function addList(arr) {

        const favList = document.querySelector('.favourite-list')
        favList.innerHTML = ''

        arr.forEach((arr) => {
     
            const cardsFav = document.createElement('li')
            const imgItem = document.createElement('img')
            const nameItem = document.createElement('h4')
            const idItem = document.createElement('p')
            const deleteItem = document.createElement('button')
        
            cardsFav.classList.add('cards-fav')
            imgItem.classList.add('cards-fav__image')
            nameItem.classList.add('cards-fav__name')
            deleteItem.classList.add('cards-fav__deleteButton')
            deleteItem.textContent = 'Delete'
            idItem.classList.add('cards-fav__idItem')
        
            imgItem.src = arr.img
            nameItem.innerHTML = arr.name
            idItem.innerHTML = arr.idItem

            cardsFav.appendChild(imgItem)
            cardsFav.appendChild(nameItem)
            cardsFav.appendChild(idItem)
            cardsFav.appendChild(deleteItem)
        
            favList.appendChild(cardsFav)

            deleteItem.addEventListener('click', (e) => {
                e.target.parentNode.remove()
                deleteStorage()
            })
        })
      
    }

    function deleteStorage(id) {
        const storedPokemon = sessionStorage.getItem('pokemon')
        arrPokemon = JSON.parse(storedPokemon)
        const indexArr = arrPokemon.findIndex(el => el.id === id)
        arrPokemon.splice(indexArr, 1)
        sessionStorage.setItem('pokemon', JSON.stringify(arrPokemon))
    }

    function getStorage() {
        const storedPokemon = JSON.parse(sessionStorage.getItem('pokemon'))
        if (storedPokemon == null) {
            arrPokemon = []
        } else {
            addList(storedPokemon)
        }
    }

    function storagePokemon(arrPokemon) {
        sessionStorage.setItem('pokemon', JSON.stringify(arrPokemon))
    }
    });
module.exports = { getPokemon, createPokemon };
