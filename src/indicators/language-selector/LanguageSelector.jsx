import React, { Component } from 'react';

import i18n from 'utils/i18n/I18n';

class LanguageSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: props.language
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ selected: nextProps.language });
  }

  renderOptions = () => (
    i18n.getLanguages().map((lang) => (
      <option key={lang} value={lang} >{lang}</option>
    ))
  )

  onChange = (ev) => {
    i18n.setLanguage(ev.target.value);
    this.setState({ selected: ev.target.value });
    this.props.onChange();
  }

  render() {
    return (
      <div className="macos-calendar-language-selector">
        <select value={this.state.selected} onChange={this.onChange}>
          {this.renderOptions()}
        </select>
      </div>
    );
  }
}

export default LanguageSelector;
