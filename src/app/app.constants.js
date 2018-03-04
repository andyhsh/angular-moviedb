import angular from 'angular';

const API_SETTINGS = {
  key: '9658ae9790af86d4edceaabc6c2c925d',
  url: 'https://api.themoviedb.org/3',
  imageUrl: 'https://image.tmdb.org/t/p/'
};

const constantsModule = angular
  .module('app.constants', [])
  .constant('API_SETTINGS', API_SETTINGS).name;

export default constantsModule;
