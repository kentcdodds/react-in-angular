/** @jsx React.DOM */

var React = require('react');
var DataGrid = require('./components/DataGrid');

var MainCtrl = React.createClass({
  getInitialState() {
    var gridValues = {
      rows: 40,
      columns: 40
    };
    return {
      data: getData(gridValues),
      gridValues: gridValues
    }
  },
  componentWillMount() {
    setInterval(this.updateStateWithCurrentValues, 1000);
  },
  updateStateWithCurrentValues() {
    var rows = this.refs.rows.getDOMNode().value;
    var columns = this.refs.columns.getDOMNode().value;
    var gridValues = {rows, columns};
    var data = getData(gridValues);
    this.setState({data, gridValues});
  },
  render() {
    var gridValues = this.state.gridValues;
    return (
      <div>
        <h1>React By Itself</h1>
        <div>
          Grid options:
          <div>
            <label>
              Columns: <input type="number" ref="columns" value={gridValues.columns} onChange={this.updateStateWithCurrentValues}/>
            </label>
            <label>
              Rows: <input type="number" ref="rows" value={gridValues.rows} onChange={this.updateStateWithCurrentValues}/>
            </label>
          </div>
        </div>

        <hr/>

        <DataGrid data={this.state.data} />
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

module.exports = MainCtrl;