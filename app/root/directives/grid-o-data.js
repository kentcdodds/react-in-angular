module.exports = ngModule => {
  ngModule.directive('gridOData', gridOData);
  var React = require('react');
  var DataGrid = React.createFactory(require('../components/DataGrid'));
  function gridOData() {
    return {
      restrict: 'E',
      scope: {
        data: '=theData'
      },
      bindToController: true,
      controllerAs: 'vm',
      controller: angular.noop,
      link: function dataGridController(scope, el) {
        scope.$watch('vm.data', function(newData) {
          React.render(DataGrid({data: newData}), el[0]);
        }, true);
      }
    }
  }
};
