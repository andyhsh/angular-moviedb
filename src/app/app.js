import angular from 'angular';
import uiRouter from 'angular-ui-router';
import components from './components/components';
import appComponent from './app.component';
import constants from './app.constants';
import services from './core/services';
import 'normalize.css';
import './styles/main.scss';

angular
  .module('app', [uiRouter, constants, components, services])
  .config(($stateProvider, $locationProvider, $urlRouterProvider) => {
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
              return response;
            });
        }
      }
    });

    const defaultMovies = ['264660', '8358', '106646', '284054'];
    const initialMovie =
      defaultMovies[Math.floor(Math.random() * defaultMovies.length)];

    $urlRouterProvider.when('/', `/movie/${initialMovie}`);

    $locationProvider.html5Mode(true);
  })
  .component('app', appComponent);
