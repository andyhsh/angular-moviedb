export default class movieController {
  constructor($http, API_SETTINGS) {
    'ngInject';
    this.$http = $http;
    this.API_SETTINGS = API_SETTINGS;
  }
}
