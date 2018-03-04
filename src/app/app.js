import angular from 'angular';
import components from './components/components';
import appComponent from './app.component';
import constants from './app.constants';
import services from './core/services';
import 'normalize.css';

angular
  .module('app', [constants, components, services])
  .component('app', appComponent);
