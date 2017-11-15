import React, { Component } from 'react';

const DayEventStyle = {
  width: '100%',
  backgroundColor: 'rgb(42, 174, 245)',
  color: 'rgb(255, 255, 255)',
  position: 'relative',
  top: '30px',
  minHeight: '16px',
  lineHeight: '16px',
  fontSize: '12px',
  textAlign: 'left',
  cursor: 'pointer',
  marginTop: '7px',
  maxWidth: '70px',
  textOverflow: 'ellipsis',
  overflow: 'hidden'
};

class DayEvent extends Component {

  onClick = (ev) => {
    ev.stopPropagation();
    this.props.onEditEvent(this.props.event);
    if (this.elem) {
      const rect = this.elem.getBoundingClientRect();
      rect.fixStyle = true;
      this.props.onEventClick(rect);
    }
  }

  render() {
    return (
      <div
        className="day-event"
        style={DayEventStyle}
        onClick={this.onClick}
        ref={(elem) => { this.elem = elem; }}
      >
        {this.props.event.title}
      </div>
    );
  }
}

export default DayEvent;
