import React, { Component } from 'react';

import i18n from 'utils/i18n/I18n';

class DateSelector extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="macos-calendar-date-selector">
        <button>{'<'}</button>
        <button>{i18n.get('today')}</button>
        <button>{'>'}</button>
      </div>
    );
  }
}

export default DateSelector;
