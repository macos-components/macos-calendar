import React, { Component } from 'react';

const YearIndicatorStyle = {
  marginLeft: '10px',
  fontSize: '20px',
  fontWeight: '200',
  marginTop: '5px'
};

class YearIndicator extends Component {
  render() {
    return (
      <div className="macos-calendar-year-indicator" style={YearIndicatorStyle}>
        {this.props.year}
      </div>
    );
  }
}

export default YearIndicator;
