import React, { Component } from 'react';

const TextFieldStyle = {
  width: '100%',
  backgroundColor: 'transparent',
  border: 'none',
  padding: '5px 10px',
  boxSizing: 'border-box',
  fontSize: '16px'
};

class TextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value });
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  render() {
    const { style, value, onChange, ...other } = this.props;
    const customStyle = Object.assign({...TextFieldStyle}, style);
    return !this.props.multiline ? (
        <input
          className="text-field"
          style={customStyle}
          value={this.state.value}
          onChange={this.handleChange}
          {...other}
        />) : (
        <textarea
          className="text-field"
          style={customStyle}
          value={this.state.value}
          rows="2"
          onChange={this.handleChange}
          {...other}
        />)
  }
}

export default TextField;
