module.exports = ngModule => {
  ngModule.directive('gridOData', gridOData);

  var React = require('react');
  var DataGrid = require('../components/DataGrid');

  gridOData.styles = require('./grid-o-data.css');

  function gridOData(_) {
    return {
      restrict: 'E',
      template: require('./grid-o-data.html'),
      scope: {},
      link: function(scope, el) {
        scope.$watch('data', newData => {
          React.render(<DataGrid data={newData} />, el[0]);
        });
      }
    }
  }
};
