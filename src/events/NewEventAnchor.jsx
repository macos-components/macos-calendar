import React, { Component } from 'react';

import i18n from 'utils/i18n/I18n';
import DateUtil from 'utils/DateUtil';
import TextField from 'form/TextField';

const NewEventAnchorStyle = {
  width: '270px',
  height: '200px',
  backgroundColor: 'rgb(239, 239, 239)',
  position: 'absolute',
  zIndex: '10000',
  borderRadius: '10px',
  marginLeft: '85px',
  boxSizing: 'border-box',
  textAlign: 'left'
};

const AnchorAfterStyle = {
  position: 'absolute',
  width: '0',
  height: '0',
  border: '10px solid',
  borderColor: 'rgb(239, 239, 239) rgb(239, 239, 239) transparent transparent',
  marginLeft: '75px',
};

const BoxStyle = {
  padding: '10px',
  borderBottom: '1px solid rgb(214, 214, 214)'
}
const EventBodyStyle = {
  ...BoxStyle,
  fontSize: '14px',
  position: 'relative'
};

const TimeInputStyle = {
  width: '70px',
  fontSize: '11px',
  padding: '0',
  border: '1px solid #dedede'
};

const RemoveIconStyle = {
  position: 'absolute',
  fontSize: '20px',
  top: '10px',
  right: '10px',
  zIndex: '100',
  cursor: 'pointer',
  color: 'rgb(252, 61, 57)'
};

const SaveButtonStyle = {
  backgroundColor: 'rgb(42, 174, 245)',
  color: 'rgb(255, 255, 255)',
  cursor: 'pointer'
};

class NewEventAnchor extends Component {
  constructor(props) {
    super(props);
    this.state = props.event ? {
      ...props.event
    } : {};
    this.initialize(props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...nextProps.event
    });
    this.initialize(nextProps);
  }

  renderDate() {
    const date = DateUtil.toInputFormat(this.state.date);

    return (
      <TextField
        name="date"
        type="date"
        value={date}
        onChange={this.onDateChange}
      />
    );
  }

  onChange = (ev) => {
    this.setState({ [ev.target.name]: ev.target.value });
    this.props.onChange(ev);
  }

  onDateChange = (ev) => {
    const event = {
      target: {
        name: ev.target.name,
        value: ev.target.value
      }
    };
    event.target.value = new Date(ev.target.value);
    this.setState({ [event.target.name]: event.target.value });
    this.props.onChange(event);
  }

  onRemove = () => {
    this.props.onRemove(this.state);
  }

  onClick = (ev) => {
    ev.stopPropagation();
  }

  onSave = () => {
    this.props.onSave(this.state);
  }

  initialize(props) {
    this.NewEventAnchorStyle = {
      ...NewEventAnchorStyle,
      top: props.rect.top,
      left: props.rect.left,
      marginTop: props.rect.fixStyle ? '0px' : '10px'
    }

    this.AnchorAfterStyle = {
      ...AnchorAfterStyle,
      top: props.rect.top,
      left: props.rect.left,
      marginTop: props.rect.fixStyle ? '10px' : '50px'
    }
  }

  render() {
    return (
      <div onClick={this.onClick}>
        <div style={this.AnchorAfterStyle}></div>
        <div className="new-event-anchor" style={this.NewEventAnchorStyle}>
          <div className="new-event-header" style={BoxStyle}>
            <TextField
              name="title"
              placeholder={i18n.get('new_event')}
              value={this.state.title}
              onChange={this.onChange}
              style={{ paddingLeft: '0px' }}
            />
          <span onClick={this.onRemove} style={RemoveIconStyle}>x</span>
          </div>
          <div className="new-event-body" style={EventBodyStyle}>
            <div>
              {this.renderDate()}
              <span
                style={{ borderLeft: '1px solid #adadad', paddingLeft: '4px', marginLeft: '4px' }}
              >
                <TextField
                  name="startTime"
                  value={this.state.startTime}
                  onChange={this.onChange}
                  style={TimeInputStyle}
                  type="time"
                />
                <span style={{ margin: '0 3px' }}>-</span>
                <TextField
                  name="endTime"
                  value={this.state.endTime}
                  onChange={this.onChange}
                  style={TimeInputStyle}
                  type="time"
                />
              </span>
            </div>
            <div>
              <TextField
                name="description"
                value={this.state.description}
                onChange={this.onChange}
                style={{ paddingLeft: '0px' }}
                multiline="true"
              />
              { this.state.showSaveButton ?
                <button style={SaveButtonStyle} onClick={this.onSave}>{i18n.get('save')}</button>
              : null }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewEventAnchor;
