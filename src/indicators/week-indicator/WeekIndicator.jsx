import React, { Component } from 'react';

import i18n from 'utils/i18n/I18n';

const WeekIndicatorStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  padding: '10px 0',
  borderBottom: '1px solid rgb(199, 199, 199)'
};

const weekDayStyle = {
  flexGrow: '1',
  flexBasis: '0',
  textAlign: 'right'
};

class WeekIndicator extends Component {
  render() {
    return (
      <div className="macos-calendar-week-indicator" style={WeekIndicatorStyle}>
        <div style={weekDayStyle}>{i18n.get('day_0_short')}</div>
        <div style={weekDayStyle}>{i18n.get('day_1_short')}</div>
        <div style={weekDayStyle}>{i18n.get('day_2_short')}</div>
        <div style={weekDayStyle}>{i18n.get('day_3_short')}</div>
        <div style={weekDayStyle}>{i18n.get('day_4_short')}</div>
        <div style={weekDayStyle}>{i18n.get('day_5_short')}</div>
        <div style={weekDayStyle}>{i18n.get('day_6_short')}</div>
      </div>
    );
  }
}

export default WeekIndicator;
