//imports

import './sass/main.scss';
import countryMarkup from './templates/country-card'
import countriesList from './templates/countries-list'
import debounce from 'lodash.debounce';
import { alert, error } from '../node_modules/@pnotify/core/dist/PNotify.js';
import ApiService from './fetchCountries';

//refs
const container = document.querySelector('#root'); 
const countrySearch = document.querySelector('#input');
const searchResult=document.querySelector('#result');
countrySearch.addEventListener('input', debounce(handlerSearch, 500));

const countriesApiService = new ApiService();

//functions
function handlerSearch(e) {
  e.preventDefault();
  // searchResult.innerHTML = '';

  countriesApiService.searchQuery= countrySearch.value;
  
  countriesApiService
    .searchCountryByName(countriesApiService.searchQuery)
    .then(countries => createCountryCard(countries))
    .catch(err => errorCase());
}



// function createCountryCard({flag, name, capital, population, languages}) {
//   const card = `
//   <div class="card">
//     <h1 class="header">${name}</h1>
//     <img src='${flag}' alt='Flag of ${name}'></img>
//     <ul>
//       <li><span class="card-item">Capital:</span> ${capital}</li>
//       <li><span class="card-item">Population:</span> ${population}</li>
//       <li><span class="card-item">Languages:</span> ${languages}</li>
//       <ul>
//         <li class="list-item">${name}</li>
//       </ul>
//     </ul>
    
// </div>`
//   container.insertAdjacentHTML('beforeend', card);
// }

function renderMarkup(template, countries) {
  searchResult.insertAdjacentHTML('beforeend', template(countries))
  // arr.forEach(el => createCountryCard(el));
}



function createCountryCard(countries) {
  searchResult.innerHTML = '';
  if (countries.length < 10 && countries.length > 1) {
    renderMarkup(countriesList, countries);
} else if (countries.length === 1) {
    renderMarkup(countryMarkup, countries);
  } else if (countries.length > 10) {
    alert({
      text: 'Too many matches found. Please enter a more specific query!',
      delay: 2000,
    });
} 
  
}

function errorCase() {
  error({
    text: 'This country does not exist! Please, check the name and try again',
    delay: 2000,
  });
}