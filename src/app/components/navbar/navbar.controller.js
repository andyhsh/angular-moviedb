export default class NavbarController {
  constructor(moviesService) {
    'ngInject';
    this.moviesService = moviesService;
    this.moviesList = [];
    this.data = {};
  }
  handleInputChange() {
    if (this.query.length > 3) {
      this.moviesService.getMovies(this.query).then(result => {
        this.data = result;
        this.moviesList = result.data.results.splice(0, 8);
      });
    } else {
      this.data = {};
      this.moviesList = [];
    }
  }
}
