import React, { Component } from 'react';

import DateUtil from 'utils/DateUtil';

const CalendarYearStyle = {
  height: '100%'
};

class CalendarYear extends Component {

  render() {
    const events = this.props.events.filter((ev) => {
      return DateUtil.isSameMonth(ev.date, this.props.date);
    });

    return (
      <div className="macos-calendar-year" style={CalendarYearStyle} />
    );
  }
}

export default CalendarYear;
