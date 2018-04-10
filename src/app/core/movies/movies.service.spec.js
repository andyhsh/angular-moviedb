import moviesService from './movies.service';
import constants from '../../app.constants';

describe('moviesService', () => {
  let service;

  beforeEach(() => {
    angular
      .module('app.services', [constants])
      .service('moviesService', moviesService);
    angular.mock.module('app.services');
  });

  beforeEach(
    angular.mock.inject(moviesService => {
      service = moviesService;
    })
  );

  it('should exist', () => {
    expect(service).toBeDefined();
  });
});
