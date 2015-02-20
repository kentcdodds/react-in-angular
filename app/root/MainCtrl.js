/** @jsx React.DOM */

var React = require('react');
var _ = require('lodash');
var DataGrid = require('./components/DataGrid');

var App = React.createClass({
  getInitialState() {
    var gridValues = {
      columns: 40,
      rows: 40
    };
    return {
      gridValues,
      data: getData(gridValues)
    }
  },
  componentWillMount() {
    setInterval(this.updateStateBasedOnValues, 500);

  },
  updateStateBasedOnValues() {
    var columns = this.refs.columns.getDOMNode().value;
    var rows = this.refs.rows.getDOMNode().value;
    var gridValues = {columns, rows};
    var data = getData(gridValues);
    this.setState({data, gridValues});
  },
  render() {
    var data = this.state.data;
    var gridValues = this.state.gridValues;
    return (
      <div>
        <h1>React</h1>
        <div>
          Grid options:
          <div>
            <label>
              Columns:
              <input type="number" ref="columns" value={gridValues.columns} onChange={this.updateStateBasedOnValues}/>
            </label>
            <label>
              Rows:
              <input type="number" ref="rows" value={gridValues.rows} onChange={this.updateStateBasedOnValues}/>
            </label>
          </div>
        </div>

        <hr/>

        <DataGrid data={data} />
      </div>
    );
  }
});

function getData({columns, rows}) {
  return _.map(_.range(columns), function() {
    return _.map(_.range(rows), function() {
      return _.random(100);
    });
  });
}

module.exports = App;


//module.exports = ngModule => {
//  ngModule.controller('MainCtrl', function MainCtrl($scope, _, $interval, gridValues) {
//    var vm = this;
//    vm.gridValues = gridValues;
//
//    $scope.$watch('vm.gridValues', updateData, true);
//
//    updateData();
//
//    $interval(updateData, 1000);
//
//    function updateData() {
//      vm.data = getData();
//    }
//
//  });
//};
