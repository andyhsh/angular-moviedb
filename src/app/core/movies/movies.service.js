export default class moviesService {
  constructor($http, API_SETTINGS) {
    'ngInject';
    this.$http = $http;
    this.API_SETTINGS = API_SETTINGS;
  }

  getMovie(id) {
    return this.$http
      .get(
        `${this.API_SETTINGS.url}/movie/${id}?api_key=${this.API_SETTINGS.key}`
      )
      .then(response => {
        return response.data;
      })
      .catch(err => {
        console.error('Error fetching movie: ', err);
      });
  }

  getMovies(query) {
    return this.$http
      .get(
        `${this.API_SETTINGS.url}/search/movie?api_key=${
          this.API_SETTINGS.key
        }&query=${query}&page=1`
      )
      .then(response => {
        return response.data.results;
      })
      .catch(err => {
        console.error('Error fetching movies: ', err);
      });
  }
}
