import angular from 'angular';
import movieComponent from './movie.component';

const movieModule = angular
  .module('movie', [])
  .component('movie', movieComponent).name;

export default movieModule;
