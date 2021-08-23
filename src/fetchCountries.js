import debounce from 'lodash.debounce';
debounce(test, 500)

function test() {
  console.log('object');
}

import { alert, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';

  alert({
    text: 'Too many matches found. Please enter a more specific query!'
  });




function createCountryCard(arr) {
  for (let obj of arr) {
    createFlag(obj)
  }

}


function createFlag(obj) {
  const svg = document.createElement('svg');
  const use = svg.appendChild('use');
  use.src = obj.flag;
  container.appendChild(svg);
}

const container = document.querySelector('#root'); //вешаем разметку
const countrySearch = document.querySelector('#input');



const handlerSearch = (e) => {
  e.preventDefault();  
  const name = countrySearch.value;
  
  fetch(`https://restcountries.eu/rest/v2/name/${name}`) //после name/ должен быть ${name} которое мы вставили в инпуте
  .then(response =>response.json())  
  .then(data => console.log(data)) //не выдает массив элементов, поэтому не знаю какой ключ использовать
  .catch(err => console.log('error', err));
}



countrySearch.addEventListener('input', handlerSearch)

// function createCountryName({name, population, languages, picture}) {
//   const name = createElement('p');
//   p.textContent = `Country: ${name.name}
//   Population: ${population}
//   Languages: ${languages}`;
// }

// {name, flag, population, languages}