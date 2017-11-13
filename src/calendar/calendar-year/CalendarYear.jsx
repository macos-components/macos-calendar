import React, { Component } from 'react';

import CalendarMonth from 'calendar/calendar-month/CalendarMonth';

class CalendarYear extends Component {

  render() {
    return (
      <div className="macos-calendar-year">
        <CalendarMonth month={this.props.month} />
      </div>
    );
  }
}

export default CalendarYear;
