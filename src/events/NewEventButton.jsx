import React, { Component } from 'react';

import i18n from 'utils/i18n/I18n';

const NewEventButtonStyle = {
  backgroundColor: 'rgb(42, 174, 245)',
  color: 'rgb(255, 255, 255)',
  marginLeft: '20px',
  cursor: 'pointer'
};

class NewEventButton extends Component {

  onClick = (ev) => {
    if (this.props.onClick) {
      ev.stopPropagation();
      const rect = this.elem.getBoundingClientRect();
      this.props.onClick(rect);
    }
  }

  render() {
    return (
      <button
        className="new-event-button"
        style={NewEventButtonStyle}
        onClick={this.onClick}
        ref={(elem) => { this.elem = elem; }}
      >
        {i18n.get('new_event')}
      </button>
    );
  }
}

export default NewEventButton;
