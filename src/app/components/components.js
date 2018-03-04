import angular from 'angular';
import navbarComponent from './navbar/navbar.module';

const componentModule = angular.module('app.components', [navbarComponent])
  .name;

export default componentModule;
