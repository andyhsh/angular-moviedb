import angular from 'angular';
import footerBarComponent from './footerBar.component';

const footerBarModule = angular
  .module('footerBar', [])
  .component('footerBar', footerBarComponent).name;

export default footerBarModule;
