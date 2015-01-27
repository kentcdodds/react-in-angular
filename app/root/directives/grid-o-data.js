module.exports = ngModule => {
  ngModule.directive('gridOData', gridOData);

  gridOData.styles = require('./grid-o-data.css');

  function gridOData(_) {
    return {
      restrict: 'E',
      template: require('./grid-o-data.html'),
      scope: {
        data: '=theData'
      },
      bindToController: true,
      controllerAs: 'vm',
      controller: function dataGridController($scope) {
        var vm = this;
        $scope.$watch('vm.data', function(newData) {
          var max = _.chain(newData).flatten().max().value();
          vm.high = max * 0.75;
          vm.low = max * 0.25;
          vm.columnCount = newData[0].length;
          vm.rowCount = newData.length;
          vm.columnHeaders = _.range(vm.columnCount);
        });
      }
    }
  }
};
