import React, { Component } from 'react';

class CalendarDay extends Component {
  render() {
    const CalendarDayStyle = {
      flexGrow: '1',
      flexBasis: '0',
      minHeight: '50px',
      color: this.props.current ? 'rgb(252, 61, 57)' : ''
    };
    const day = this.props.day || new Date();
    const dayString = day.getUTCDate();

    return (
      <div
        className={`macos-calendar-day ${this.props.current ? 'current' : ''}`}
        style={CalendarDayStyle}
      >
        {dayString}
      </div>
    );
  }
}

export default CalendarDay;
