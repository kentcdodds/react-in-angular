module.exports = ngModule => {
  ngModule.controller('MainCtrl', function MainCtrl($scope, _, $interval, gridValues) {
    var vm = this;
    vm.gridValues = gridValues;

    $scope.$watch('vm.gridValues', updateData, true);

    updateData();

    $interval(updateData, 1000);

    function updateData() {
      vm.data = getData();
    }

    function getData() {
      return _.map(_.range(gridValues.columns), function() {
        return _.map(_.range(gridValues.rows), function() {
          return _.random(100);
        });
      });
    }
  });
};
