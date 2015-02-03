/** @jsx React.DOM */

var React = require('react');
var DataGrid = require('./components/DataGrid');

var App = React.createClass({
  handleInputChange() {
    var columns = this.refs.cols.getDOMNode().value;
    var rows = this.refs.rows.getDOMNode().value;
    var gridValues = {columns, rows};
    this.props.updateGridValues(gridValues);
  },
  render() {
    var data = this.props.data;
    var rows = this.props.rows;
    var columns = this.props.columns;
    return (
      <div>
        <h1>React</h1>
        <div>
          Grid options:
          <div>
            <label>
              Columns:
              <input type="number" ref="cols" value={columns} onChange={this.handleInputChange}/>
            </label>
            <label>
              Rows:
              <input type="number" ref="rows" value={rows} onChange={this.handleInputChange}/>
            </label>
          </div>
        </div>
        <hr/>
        <DataGrid data={data} />
      </div>
    );
  }
});

module.exports = ngModule => {
  ngModule.controller('MainCtrl', function MainCtrl($scope, _, $interval, gridValues, $element) {
    var vm = this;

    updateData();

    $interval(updateData, 1000);

    function updateData() {
      vm.data = getData();
      React.render(<App data={vm.data} rows={gridValues.rows} columns={gridValues.columns} updateGridValues={updateGridValues}/>, $element[0]);
    }

    function updateGridValues({rows, columns}) {
      gridValues.rows = rows;
      gridValues.columns = columns;
      updateData();
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
