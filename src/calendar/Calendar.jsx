import React, { Component } from 'react';

import i18n from 'utils/i18n/I18n';
import CalendarYear from 'calendar/calendar-year/CalendarYear';
import MonthIndicator from 'indicators/month-indicator/MonthIndicator';
import YearIndicator from 'indicators/year-indicator/YearIndicator';
import WeekIndicator from 'indicators/week-indicator/WeekIndicator';
import SearchIndicator from 'indicators/search-indicator/SearchIndicator';
import DateSelector from 'indicators/date-selector/DateSelector';
import LanguageSelector from 'indicators/language-selector/LanguageSelector';
import NewEventAnchor from 'events/NewEventAnchor';

const CalendarStyle = {
  width: '100%',
  height: '100%',
  padding: '10px'
}
const FlexStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  alignItems: 'center'
}
class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: props.date || new Date(),
      anchorRect: null,
      events: []
    }
  }

  prevMonth = () => {
    const prevMonth = this.state.date;
    prevMonth.setMonth(prevMonth.getMonth() - 1);
    this.setState({ date: prevMonth, anchorRect: null });
  }
  currentMonth = () => {
    const currentMonth = new Date();
    currentMonth.setMonth(currentMonth.getMonth());
    this.setState({ date: currentMonth, anchorRect: null });
  }
  nextMonth = () => {
    const nextMonth = this.state.date;
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    this.setState({ date: nextMonth, anchorRect: null });
  }

  onCalendarClick = () => {
    this.setState({ anchorRect: null });
  }

  onCellClick = (rect) => {
    this.setState({ anchorRect: rect });
  }

  onAddEvent = (lastEvent) => {
    const { events } = this.state;
    events.push(lastEvent);
    events.sort(function(a, b) { return a.date.getTime() - b.date.getTime() })
    this.setState({ events , lastEvent });
    if (this.props.onEventAdd) {
      this.props.onEventAdd(lastEvent);
    }
  }

  onEditEvent = (lastEvent) => {
    this.setState({ lastEvent });
  }

  onNewEventChange = (ev) => {
    const { events, lastEvent } = this.state;
    lastEvent[ev.target.name] = ev.target.value;
    this.setState({ events, lastEvent });
  }

  onLanguageChange = () => {
    this.forceUpdate();
  }

  closeEventAnchor = () => {
    this.setState({ anchorRect: null });
  }

  render() {
    const month = this.state.date.getMonth();
    const year = this.state.date.getFullYear();
    return (
      <div
        className="macos-calendar"
        style={CalendarStyle}
        onClick={this.onCalendarClick}
      >
        <div className="macos-calendar-header" style={FlexStyle}>
          <div className="macos-calendar-indicators" style={FlexStyle}>
            <MonthIndicator month={month} />
            <YearIndicator year={year} />
          </div>
          <div>
            <SearchIndicator events={this.state.events} />
          </div>
          <div>
            <LanguageSelector
              language={i18n.getLanguage()}
              onChange={this.onLanguageChange}
            />
            <DateSelector
              onLeftButtonClick={this.prevMonth}
              onTodayButtonClick={this.currentMonth}
              onRightButtonClick={this.nextMonth}
            />
          </div>
        </div>
        <WeekIndicator />
        <CalendarYear
          date={this.state.date}
          events={this.state.events}
          onCellClick={this.onCellClick}
          onAddEvent={this.onAddEvent}
          onEditEvent={this.onEditEvent}
        />
      { this.state.anchorRect ?
        <NewEventAnchor
          rect={this.state.anchorRect}
          onChange={this.onNewEventChange}
          event={this.state.lastEvent}
        /> :
        null
      }
      </div>
    );
  }
}

export default Calendar;
