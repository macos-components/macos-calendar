import React, { Component } from 'react';

const CalendarDayStyle = {
  flexGrow: '1',
  flexBasis: '0',
  minHeight: '50px',
  position: 'relative',
  padding: '5px',
  borderRight: '1px solid rgb(205, 205, 205)'
};
const SpanStyle = {
  position: 'absolute',
  top: '0px',
  right: '0px',
  width: '20px',
  height: '20px',
  lineHeight: '20px',
  padding: '3px'
};

class CalendarDay extends Component {
  render() {
    const DaySpanStyle = this.props.current ? Object.assign({...SpanStyle}, {
      backgroundColor:  'rgb(252, 61, 57)',
      borderRadius:  '50%',
      color:  '#FFFFFF'
    }) : SpanStyle;
    const day = this.props.day || new Date();
    const dayString = day.getDate();

    return (
      <div
        className={`macos-calendar-day ${this.props.current ? 'current' : ''}`}
        style={CalendarDayStyle}
      >
        <span style={DaySpanStyle}>
          {dayString}
        </span>
      </div>
    );
  }
}

export default CalendarDay;
