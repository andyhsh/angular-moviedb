import angular from 'angular';
import navbarComponent from './navbar/navbar.module';
import movieComponent from './movie/movie.module';

const componentModule = angular.module('app.components', [
  navbarComponent,
  movieComponent
]).name;

export default componentModule;
