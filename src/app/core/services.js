import angular from 'angular';
import moviesService from './movies/movies.service';
import constants from '../app.constants';

const servicesModule = angular
  .module('app.services', [constants])
  .service('moviesService', moviesService).name;

export default servicesModule;
