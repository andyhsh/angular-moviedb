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
    this.query = this.query.trim();
    if (this.query.length > 3) {
      this.moviesService.getMovies(this.query).then(data => {
        this.moviesList = this.setJsonFormat(data.splice(0, 5));
      });
    } else {
      this.moviesList = [];
    }
  }

  handleClick() {
    this.moviesList = [];
    this.query = '';
  }
}
