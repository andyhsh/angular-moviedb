export default class navbarController {
  constructor(moviesService, API_SETTINGS) {
    'ngInject';
    this.moviesService = moviesService;
    this.moviesList = [];
    this.API_SETTINGS = API_SETTINGS;
  }

  setJsonFormat(movieList) {
    return movieList.map(m => {
      const img =
        m.poster_path !== null
          ? `${this.API_SETTINGS.imageUrl}w92${m.poster_path}`
          : null;

      return (m = {
        title: m.title,
        id: m.id,
        img
      });
    });
  }

  handleInputChange() {
    if (this.query.length > 3) {
      this.moviesService.getMovies(this.query).then(result => {
        this.moviesList = this.setJsonFormat(result.data.results.splice(0, 10));
      });
    } else {
      this.moviesList = [];
    }
  }
}
