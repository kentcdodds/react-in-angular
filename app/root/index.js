var ngModule = angular.module('react♥Angular__ಠ_ರೃ', []);
ngModule.constant('_', require('lodash'));
ngModule.value('gridValues', {
  columns: 40,
  rows: 40
});
require('./MainCtrl')(ngModule);
require('./directives/grid-o-data')(ngModule);
