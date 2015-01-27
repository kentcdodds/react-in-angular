/** @jsx React.DOM */

var React = require('react');
var _ = require('lodash');
require('./DataGrid.css');

var DataGrid = React.createClass({
  render() {
    var data = this.props.data || [[]];
    var max = _.chain(data).flatten().max().value();
    var high = max * 0.75;
    var low = max * 0.25;
    var columnCount = data[0].length;
    var rowCount = data.length;
    var columnHeaders = _.range(columnCount);
    var rows = _.map(data, function(row, index) {
      var cells = _.map(row, function(value, index) {
        var status = value > high ? 'high' : value < low ? 'low' : '';
        return <td className={status} key={index}>{value}</td>;
      });
      return (
        <tr key={index}>
          <td><strong>Row {index + 1}</strong></td>
          {cells}
        </tr>
      );
    });
    var headers = _.map(columnHeaders, function(header, index) {
      return <th key={index}>Column {header + 1}</th>;
    });
    return (
      <div className="data-grid">
        Hi! I'm a data grid! I have {columnCount} columns and {rowCount} rows!

        <table>
          <thead>
            <tr>
              <th></th>
              {headers}
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = DataGrid;