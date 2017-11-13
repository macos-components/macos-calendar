import React, { Component } from 'react';

import DateUtil from 'utils/DateUtil';
import CalendarWeek from 'calendar/calendar-week/CalendarWeek';

const WEEK_IN_A_MONTH_VIEW = 6;
const CalendarMonthStyle = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'no-wrap',
  paddingTop: '10px'
};

class CalendarMonth extends Component {
  renderWeeks = () => {
    const weeks = [];
    const startDate = DateUtil.getStartDayOfMonthCalendar();

    for (let i = 1; i <= WEEK_IN_A_MONTH_VIEW; i++) {
      const date = new Date(startDate.getTime());
      date.setDate(date.getDate() + ((i - 1) * 7));
      weeks.push(<CalendarWeek startDate={date} key={i} />);
    }

    return weeks;
  };

  render() {
    return (
      <div className="macos-calendar-month" style={CalendarMonthStyle}>
        {this.renderWeeks()}
      </div>
    );
  }
}

export default CalendarMonth;
