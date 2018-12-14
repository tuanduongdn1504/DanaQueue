import React, { Component } from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

class SimpleLineCharts extends Component {
  componentDidMount() {}
  render() {
    const { datas, height, keysList, yAxisLabel } = this.props;
    const linesList = map(keysList, (item, key) => {
      return (
        <Line
          key={key}
          name={item.name}
          type="monotone"
          dataKey={item.key}
          stroke={item.color}
          activeDot={{ r: 8 }}
        />
      );
    });
    return (
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={datas}>
          <XAxis dataKey="name" stroke="#788195" width={80} padding={{ right: 30 }} />
          <YAxis stroke="#788195" label={yAxisLabel} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          {linesList}
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

SimpleLineCharts.propTypes = {
  datas: PropTypes.array,
  keysList: PropTypes.array,
  yAxisLabel: PropTypes.string,
  height: PropTypes.number,
};

export default SimpleLineCharts;
