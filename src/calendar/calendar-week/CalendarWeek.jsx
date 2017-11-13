import React, { Component } from 'react';

import DateUtil from 'utils/DateUtil';
import CalendarDay from 'calendar/calendar-day/CalendarDay';

const DAYS_IN_A_WEEK = 7;
const currentDay = DateUtil.getDay();
const CalendarWeekStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'no-wrap',
  flexGrow: '1'
}

class CalendarWeek extends Component {
  renderCells() {
    const cells = [];
    const startDay = this.props.startDate || new Date();

    for (let i = 0; i < DAYS_IN_A_WEEK; i++) {
      const day = new Date(startDay.getTime());
      day.setDate(day.getDate() + i);
      const current = day.getDate() === new Date().getDate();
      cells.push(<CalendarDay day={day} key={i} current={current} />);
    }

    return cells;
  };

  render() {
    return this.props.startDate && (
      <div className="macos-calendar-week" style={CalendarWeekStyle}>
        {this.renderCells()}
      </div>
    );
  }
}

export default CalendarWeek;
