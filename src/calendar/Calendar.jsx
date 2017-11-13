import React, { Component } from 'react';

import i18n from 'utils/i18n/I18n';
import DateUtil from 'utils/DateUtil';
import CalendarYear from 'calendar/calendar-year/CalendarYear';
import MonthIndicator from 'indicators/month-indicator/MonthIndicator';
import YearIndicator from 'indicators/year-indicator/YearIndicator';
import DateSelector from 'indicators/date-selector/DateSelector';

const CalendarStyle = {
  width: '100%',
  height: '100%',
  padding: '10px',
  backgroundColor: 'rgb(245, 245, 245)'
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
    const { month, year } = props;

    this.state = {
      month: month || DateUtil.getMonth(),
      year: year || DateUtil.getYear()
    }
  }

  render() {
    return (
      <div className="macos-calendar" style={CalendarStyle}>
        <div className="macos-calendar-header" style={FlexStyle}>
          <div className="macos-calendar-indicators" style={FlexStyle}>
            <MonthIndicator month={this.state.month} />
            <YearIndicator year={this.state.year} />
          </div>
          <div>
            <DateSelector />
          </div>
        </div>
        <CalendarYear year={this.state.year} month={this.state.month} />
      </div>
    );
  }
}

export default Calendar;
