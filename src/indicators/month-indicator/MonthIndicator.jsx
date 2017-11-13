import React, { Component } from 'react';

import i18n from 'utils/i18n/I18n';

const MonthIndicatorStyle = {
  fontSize: '26px'
};

class MonthIndicator extends Component {
  render() {
    return (
      <div className="macos-calendar-month-indicator" style={MonthIndicatorStyle}>
        {i18n.get(`month_${this.props.month}`)}
      </div>
    );
  }
}

export default MonthIndicator;
