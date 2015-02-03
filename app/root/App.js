/** @jsx React.DOM */

var React = require('react');
var DataGrid = require('./components/DataGrid');

var App = React.createClass({
  getInitialState() {
    var gridValues = {
      columns: 40,
      rows: 40
    };
    return {
      gridValues, data: getData(gridValues)
    };
  },
  componentWillMount() {
    setInterval(this.updateDataBasedOnInputValues, 500);
  },
  updateDataBasedOnInputValues() {
    var columns = this.refs.cols.getDOMNode().value;
    var rows = this.refs.rows.getDOMNode().value;
    var gridValues = {columns, rows};
    this.setState({
      gridValues, data: getData(gridValues)
    });
  },
  render() {
    var data = this.state.data;
    var rows = this.state.gridValues.rows;
    var columns = this.state.gridValues.columns;
    return (
      <div>
        <h1>React</h1>
        <div>
          Grid options:
          <div>
            <label>
              Columns:
              <input type="number" ref="cols" value={columns} onChange={this.updateDataBasedOnInputValues}/>
            </label>
            <label>
              Rows:
              <input type="number" ref="rows" value={rows} onChange={this.updateDataBasedOnInputValues}/>
            </label>
          </div>
        </div>
        <hr/>
        <DataGrid data={data} />
      </div>
    );
  }
});

module.exports = App;

function getData({columns, rows}) {
  return _.map(_.range(columns), function() {
    return _.map(_.range(rows), function() {
      return _.random(100);
    });
  });
}
