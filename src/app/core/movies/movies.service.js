export default class moviesService {
  constructor($http, constants) {
    'ngInject';
    this.$http = $http;
    this.apiPath = 'https://api.themoviedb.org/3';
    this.apiKey = '9658ae9790af86d4edceaabc6c2c925d';
  }

  getMovie(id) {
    return this.$http.get(`${this.apiPath}/movie/${id}?api_key=${this.apiKey}`);
  }

  getMovies(query) {
    return this.$http.get(
      `${this.apiPath}/search/movie?api_key=${
        this.apiKey
      }&query=${query}&page=1`
    );
  }
}
