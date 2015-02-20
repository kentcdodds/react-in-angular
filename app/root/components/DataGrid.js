/** @jsx React.DOM */

var React = require('react');

require('./DataGrid.less');

var DataGrid = React.createClass({
  render() {
    var data = this.props.data;
    var max = _.chain(data).flatten().max().value();
    var high = max * 0.75;
    var low = max * 0.25;
    var columnCount = data[0].length;
    var rowCount = data.length;
    var columnHeaders = _.range(columnCount);
    var columns = columnHeaders.map((header, index) => <th key={index}>Column {header + 1}</th>);
    var rows = data.map((row, index) => {
      var cells = row.map((value, index) => {
        let className = value > high ? 'high' : value < low ? 'low' : null;
        return <td key={index} className={className}>{value}</td>;
      });
      return (
        <tr key={index}>
          <td><strong>Row {index + 1}</strong></td>
          {cells}
        </tr>
      );
    });

    return (
      <div className="DataGrid">
        Hi! I'm a data grid! I have {columnCount} columns and {rowCount} rows!

        <table>
          <thead>
            <tr>
              <th></th>
              {columns}
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