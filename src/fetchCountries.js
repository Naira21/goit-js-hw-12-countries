import './sass/main.scss';

const container = document.querySelector('#root'); //вешаем разметку
const countrySearch = document.querySelector('#input');



const handlerSearch = (e) => {
  e.preventDefault();  
  const name = countrySearch.value;
  
  fetch(`https://restcountries.eu/rest/v2/name/${name}`) //после name/ должен быть ${name} которое мы вставили в инпуте
  .then(response =>response.json())  
  .then(countries => renderCollection(countries.name)) //не выдает массив элементов, поэтому не знаю какой ключ использовать --- здесь должно бытьь имя объекта!!!
  .catch(err => console.log('error', err));
}

function createCountryCard({flag, name, population, languages}) {
  const card = `<article>
    <svg>
    <use scr='${flag}' alt='Flag of ${name}'></use>
    </svg> 
    <p>${name}</p>
    <p>${population}</p>
    <p>${languages}</p>
  </article>`
  container.insertAdjacentHTML('beforeend', card);
}

function renderCollection(arr) {
  arr.forEach(el => createCountryCard(el));
}

countrySearch.addEventListener('input', handlerSearch);
