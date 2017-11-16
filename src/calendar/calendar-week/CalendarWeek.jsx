import React, { Component } from 'react';

import CalendarDay from 'calendar/calendar-day/CalendarDay';
import { DAYS_IN_A_WEEK } from 'calendar/constants';

const CalendarWeekStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'no-wrap',
  flexGrow: '1',
  borderBottom: '1px solid rgb(205, 205, 205)'
}

class CalendarWeek extends Component {
  renderCells() {
    const cells = [];
    const startDay = this.props.startDate || new Date();
    const date = this.props.date || new Date();
    const today = new Date();

    for (let i = 0; i < DAYS_IN_A_WEEK; i++) {
      const day = new Date(startDay.getTime());
      day.setDate(day.getDate() + i);
      const current = day.toDateString() === today.toDateString();
      const inactive = day.getMonth() !== date.getMonth();
      const events = this.props.events.filter((ev) => {
        return ev.date.toDateString() === day.toDateString();
      });

      cells.push(
        <CalendarDay
          day={day}
          key={i}
          current={current}
          inactive={inactive}
          events={events}
          onCellClick={this.props.onCellClick}
          onAddEvent={this.props.onAddEvent}
          onEditEvent={this.props.onEditEvent}
        />
      );
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
