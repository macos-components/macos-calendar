import React, { Component } from 'react';

import i18n from 'utils/i18n/I18n';
import TextField from 'form/TextField';

const SearchResultsStyle = {
  position: 'absolute',
  width: '100%',
  zIndex: '100',
  borderRadius: '3px',
  backgroundColor: '#ededed',
};

const SearchResultStyle = {
  marginTop: '10px',
  borderBottom: '1px solid #dedede',
  padding: '10px 5px',
  textAlign: 'left'
};

const EventTitleStyle = {
  fontSize: '18px'
};
const EventDescStyle = {
  fontSize: '12px',
  paddingTop: '10px',
  fontWeight: '200'
};
const EventTimeStyle = {
  fontSize: '14px'
};

class SearchIndicator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      searchResults: [],
      showResults: false
    }
  }

  renderSearchResults = () => (
    this.state.search !== '' && this.state.showResults ? this.state.searchResults.map((event, index) => (
      <div style={SearchResultStyle} key={index}>
        <div style={EventTitleStyle}>{event.title}</div>
        <div style={EventDescStyle}>{event.description}</div>
        <div style={EventTimeStyle}>{event.startTime} {i18n.get('to')} {event.endTime}</div>
      </div>
    )): null
  )

  hideSearchResults = () => {
    this.setState({ showResults: false });
  }

  showSearchResults = () => {
    this.setState({ showResults: true });
  }

  onChange = (ev) => {
    const search = ev.target.value;
    const searchResults = this.props.events.filter((event) => {
      const regex = new RegExp(search, 'i');
      return event.title.search(regex) >= 0;
    });
    this.setState({ [ev.target.name]: search, searchResults });
  }

  render() {
    return (
      <div className="macos-calendar-search-indicator" style={{ position: 'relative' }}>
        <TextField
          name="search"
          placeholder={i18n.get('search_events')}
          value={this.state.search}
          onChange={this.onChange}
          onBlur={this.hideSearchResults}
          onFocus={this.showSearchResults}
        />
        <div className="search-results" style={SearchResultsStyle}>
          {this.renderSearchResults()}
        </div>
      </div>
    );
  }
}

export default SearchIndicator;
