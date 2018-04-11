import moviesService from './movies.service';
import constants from '../../app.constants';

describe('Service: moviesService', () => {
  let service, $httpBackend;

  beforeEach(() => {
    angular
      .module('app.services', [constants])
      .service('moviesService', moviesService);
    angular.mock.module('app.services');
  });

  beforeEach(
    angular.mock.inject((_moviesService_, _$httpBackend_) => {
      service = _moviesService_;
      $httpBackend = _$httpBackend_;
    })
  );

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should exist', () => {
    expect(service).toBeDefined();
  });

  it('should fetch a list of movies from a query', () => {
    let response;
    const query = 'mockQuery';
    const url = `${service.API_SETTINGS.url}/search/movie?api_key=${
      service.API_SETTINGS.key
    }&query=${query}&page=1`;

    const mockResponse = {
      results: [
        {
          poster_path: '/qtBFrsEQ4oXW8sKvRxkKnYuPLg.jpg',
          title: 'Spider-Man 2',
          id: 558
        },
        {
          poster_path: '/mUjWof8LHDgCZC9mFp0UYKBf1Dm.jpg',
          title: 'The Amazing Spider-Man 2',
          id: 102382
        }
      ]
    };

    $httpBackend.whenGET(url).respond(mockResponse);
    service.getMovies(query).then(data => {
      response = data;
    });

    $httpBackend.flush();
    expect(response).toEqual(mockResponse.results);
  });

  it('should fetch a specific movie from an id', () => {
    let response;
    const url = `${service.API_SETTINGS.url}/movie/27205?api_key=${
      service.API_SETTINGS.key
    }`;

    const mockResponse = {
      backdrop_path: '/s2bT29y0ngXxxu2IA8AOzzXTRhd.jpg',
      id: 27205,
      release_date: '2010-07-14'
    };

    $httpBackend.whenGET(url).respond(mockResponse);
    service.getMovie(27205).then(data => {
      response = data;
    });

    $httpBackend.flush();
    expect(response).toEqual(mockResponse);
  });
});
