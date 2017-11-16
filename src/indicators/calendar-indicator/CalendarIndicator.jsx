import React, { Component } from 'react';

import i18n from 'utils/i18n/I18n';
import { CALENDAR_TYPES } from 'calendar/constants';

const CalendarIndicatorStyle = {
  fontSize: '26px'
};

const ButtonActiveStyle = {
  backgroundColor: 'rgb(106, 106, 106)',
  color: 'rgb(255, 255, 255)'
}
const ButtonStyle = {
  backgroundColor: 'rgb(255, 255, 255)',
  color: 'rgb(80, 80, 80)'
}

class CalendarIndicator extends Component {

  renderCalendarTypes() {
    return Object.keys(CALENDAR_TYPES).map((type) => {
      return (
        <button
          key={type}
          style={type === this.props.type ? ButtonActiveStyle : ButtonStyle}
          onClick={() => this.props.onChange(type)}
        >
          {i18n.get(`calendar_type_${type}`)}
        </button>
      );
    });
  }
  render() {
    return (
      <div className="macos-calendar-indicator" style={CalendarIndicatorStyle}>
        {this.renderCalendarTypes()}
      </div>
    );
  }
}

export default CalendarIndicator;
