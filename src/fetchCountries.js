import './sass/main.scss';

const container = document.querySelector('#root'); //вешаем разметку
const countrySearch = document.querySelector('#input');



const handlerSearch = (e) => {
  e.preventDefault();  
  const name = countrySearch.value;
  
  fetch(`https://restcountries.eu/rest/v2/name/${name}`)
  .then(response => response.json())
  .then(countries => renderCollection(countries))
  .catch(err => console.log('error', err));
}

function createCountryCard({flag, name, capital, population, languages}) {
  const card = `<article>    
    <p>${name}</p>  
    <img scr='${flag}' alt='Flag of ${name}'></img>
    <p>Capital: ${capital}</p> 
    <p>Population: ${population}</p>
    <p>Languages: ${languages[name]}</p>
  </article>`
  container.insertAdjacentHTML('beforeend', card);
}

function renderCollection(arr) {
console.log(arr); 
  arr.forEach(el => createCountryCard(el));
}

countrySearch.addEventListener('input', handlerSearch);
