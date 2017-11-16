import React, { Component } from 'react';

import DateUtil from 'utils/DateUtil';
import CalendarWeek from 'calendar/calendar-week/CalendarWeek';
import WeekIndicator from 'indicators/week-indicator/WeekIndicator';

const WEEK_IN_A_MONTH_VIEW = 6;
const CalendarMonthStyle = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'no-wrap',
  height: '100%'
};

class CalendarMonth extends Component {
  renderWeeks = () => {
    const weeks = [];
    const startDate = DateUtil.getStartDayOfMonthCalendar(this.props.date);

    for (let i = 1; i <= WEEK_IN_A_MONTH_VIEW; i++) {
      const date = new Date(startDate.getTime());
      date.setDate(date.getDate() + ((i - 1) * 7));
      const events = this.props.events.filter((ev) => {
        return DateUtil.isSameWeek(ev.date, date);
      });

      if(!this.props.weekly || DateUtil.isSameWeek(new Date(), date)) {
        weeks.push(
          <CalendarWeek
            startDate={date}
            key={i}
            date={this.props.date}
            events={events}
            onCellClick={this.props.onCellClick}
            onAddEvent={this.props.onAddEvent}
            onEditEvent={this.props.onEditEvent}
            />
        );
      }
    }

    return weeks;
  };

  render() {
    return (
      <div className="macos-calendar-month" style={CalendarMonthStyle}>
        <WeekIndicator />
        {this.renderWeeks()}
      </div>
    );
  }
}

export default CalendarMonth;
