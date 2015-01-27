angular.element(document).ready(function() {
  var $injector = window.$injector = angular.element(document.body).injector();
  window.ngModule = angular.module('react♥Angular__ಠ_ರೃ');

  ['$compile'].forEach(function(item) {
    window[item] = $injector.get(item);
  });
});

window.showAngularStats = require('ng-stats');