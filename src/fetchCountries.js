import './sass/main.scss';
// import countryMarkup from './country-card.hbs'
import debounce from 'lodash.debounce';


const container = document.querySelector('#root'); 
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
  const card = `
  <div class="card">
    <h1 class="header">${name}</h1>
    <img src='${flag}' alt='Flag of ${name}'></img>
    <ul>
      <li><span class="card-item">Capital:</span> ${capital}</li>
      <li><span class="card-item">Population:</span> ${population}</li>
      <li><span class="card-item">Languages:</span> ${languages}</li>
      <ul>
        <li class="list-item">${name}</li>
      </ul>
    </ul>
    
</div>`
  container.insertAdjacentHTML('beforeend', card);
}

function renderCollection(arr) {
console.log(arr); 
  arr.forEach(el => createCountryCard(el));
}

countrySearch.addEventListener('input', debounce(handlerSearch, 500));

if (data.length > 10) {
  alert("Too many matches found. Please enter a more specific query!");
} else {
  if (data.length < 10 && data.length > 2) {
    
  }
}