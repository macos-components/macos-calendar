import React, { Component } from 'react';

import DateUtil from 'utils/DateUtil';
import CalendarMonth from 'calendar/calendar-month/CalendarMonth';

const CalendarYearStyle = {
  height: '100%'
};

class CalendarYear extends Component {

  render() {
    const events = this.props.events.filter((ev) => {
      return DateUtil.isSameMonth(ev.date, this.props.date);
    });

    return (
      <div className="macos-calendar-year" style={CalendarYearStyle}>
        <CalendarMonth
          date={this.props.date}
          events={events}
          onCellClick={this.props.onCellClick}
          onAddEvent={this.props.onAddEvent}
          onEditEvent={this.props.onEditEvent}
        />
      </div>
    );
  }
}

export default CalendarYear;
