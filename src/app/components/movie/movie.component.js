import template from './movie.html';
import controller from './movie.controller';

const movieComponent = {
  template,
  controller,
  controllerAs: 'vm',
  bindings: { movie: '<' }
};

export default movieComponent;
