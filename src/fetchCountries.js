export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.baseUrl = 'https://restcountries.eu/rest/v2/';
  }

  searchCountryByName() {
    // https://restcountries.eu/rest/v2/name/eesti
    const url = `${this.baseUrl}name/${this.searchQuery}`;

    // запрет отправки пустой строки

    if (!this.searchQuery) {
      return;
    }

    return fetch(url).then(reply => {
      if (reply) {
        return reply.json();
      }

      throw new Error('ошибка');
    });
  }
}