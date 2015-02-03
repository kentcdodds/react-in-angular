module.exports = ngModule => {
  ngModule.directive('gridOData', gridOData);

  var React = require('react');
  var DataGrid = require('../components/DataGrid');

  function gridOData(_) {
    return {
      restrict: 'E',
      scope: {
        data: '=theData'
      },
      link: function dataGridLink(scope, el) {
        scope.$watch('data', function(newData) {
          if (!_.isEmpty(newData)) {
            React.render(<DataGrid data={newData} />, el[0]);
          }
        });
      }
    }
  }
};
