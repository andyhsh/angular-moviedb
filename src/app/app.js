import angular from 'angular';
import uiRouter from 'angular-ui-router';
import components from './components/components';
import appComponent from './app.component';
import constants from './app.constants';
import services from './core/services';
import 'normalize.css';

angular
  .module('app', [uiRouter, constants, components, services])
  .config(($stateProvider, $locationProvider) => {
    'ngInject';
    $stateProvider.state('movie', {
      name: 'movie',
      url: '/movie/:movieId',
      component: 'movie',
      resolve: {
        movie: function(moviesService, $transition$) {
          return moviesService
            .getMovie($transition$.params().movieId)
            .then(response => {
              return response.data;
            })
            .catch(err => {
              console.error('Error fetching movie');
            });
        }
      }
    });

    $locationProvider.html5Mode(true);
  })
  .component('app', appComponent);
