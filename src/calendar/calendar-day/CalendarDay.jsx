import React, { Component } from 'react';

import i18n from 'utils/i18n/I18n';
import DayEvent from 'events/DayEvent';

const SUNDAY_INDEX = 0;
const DEFAULT_START_TIME = '09:00';
const DEFAULT_END_TIME = '10:00';

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

const MonthNameStyle = {
  position: 'absolute',
  top: '0px',
  left: '0px',
  padding: '5px'
};

const InActiveStyle = {
  color: 'rgb(195, 195, 195)'
};

const VacationStyle = {
  backgroundColor: 'rgb(245, 245, 245)',
  color: 'rgb(135, 135, 135)'
};

class CalendarDay extends Component {
  constructor(props) {
    super(props);
    this.initialize(props);
  }

  componentWillReceiveProps(nextProps) {
    this.initialize(nextProps);
  }

  initialize(props) {
    this.DaySpanStyle = props.current ? Object.assign({...SpanStyle}, {
      backgroundColor:  'rgb(252, 61, 57)',
      borderRadius:  '50%',
      color:  '#FFFFFF'
    }) : SpanStyle;

    this.CalendarDayStyle = props.inactive ? Object.assign({...CalendarDayStyle}, {
      ...InActiveStyle
    }) : CalendarDayStyle;

    const day = props.day || new Date();

    const isVacation = day.getDay() === SUNDAY_INDEX || props.isVacation;
    this.CalendarDayStyle = isVacation ? Object.assign({...this.CalendarDayStyle}, {
      ...VacationStyle
    }) : this.CalendarDayStyle;

    const dayInt = day.getDate();
    this.monthName = dayInt === 1 ? i18n.get(`month_${day.getMonth()}_short`) : '';
    this.dayString = dayInt;
  }

  renderEvents = () => (
    this.props.events.map((event, index) => (
      <DayEvent
        event={event}
        key={index}
        onEventClick={this.props.onCellClick}
        onEditEvent={this.props.onEditEvent}
      />
    ))
  );

  addEvent = () => {
    const event = {
      title: i18n.get('new_event'),
      description: i18n.get('enter_description'),
      startTime: DEFAULT_START_TIME,
      endTime: DEFAULT_END_TIME,
      date: this.props.day
    };
    this.props.onAddEvent(event);
  }

  onCellClick = () => {
    this.addEvent();
    if (this.elem) {
      const rect = this.elem.getBoundingClientRect();
      this.props.onCellClick(rect);
    }
  }

  render() {
    return (
      <div
        className={`macos-calendar-day ${this.props.current ? 'current' : ''}`}
        style={this.CalendarDayStyle}
        onDoubleClick={this.onCellClick}
        ref={(elem) => { this.elem = elem; }}
      >
        <span style={MonthNameStyle}>{this.monthName}</span>
        <span style={this.DaySpanStyle}>{this.dayString}</span>
        {this.renderEvents()}
      </div>
    );
  }
}

export default CalendarDay;
