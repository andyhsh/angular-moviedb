import angular from 'angular';
import navbarComponent from './navbar/navbar.module';
import movieComponent from './movie/movie.module';
import footerBarComponent from './footer/footer.module';

const componentModule = angular.module('app.components', [
  navbarComponent,
  movieComponent,
  footerBarComponent
]).name;

export default componentModule;
