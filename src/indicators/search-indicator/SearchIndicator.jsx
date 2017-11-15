import React, { Component } from 'react';

import i18n from 'utils/i18n/I18n';
import DateUtil from 'utils/DateUtil';
import TextField from 'form/TextField';

const MINIMUM_STR_LEN = 3;

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
  fontSize: '18px',
  textOverflow: 'ellipsis',
  overflow: 'hidden'
};
const EventDescStyle = {
  fontSize: '12px',
  paddingTop: '10px',
  fontWeight: '200',
  wordBreak: 'break-word'
};
const EventTimeStyle = {
  fontSize: '14px'
};

const EventDateStyle = {
  float: 'left',
  width: '20%',
  boxSizing: 'border-box',
  textAlign: 'center',
  fontWeight: '200'
}

const EventContentStyle = {
  float: 'left',
  width: '80%',
  boxSizing: 'border-box',
  paddingLeft: '10px'
}

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
        <div style={EventDateStyle}>
          {DateUtil.toShortString(event.date)}
        </div>
        <div style={EventContentStyle}>
          <div style={EventTitleStyle}>{event.title}</div>
          <div style={EventDescStyle}>{event.description}</div>
          <div style={EventTimeStyle}>{event.startTime} {i18n.get('to')} {event.endTime}</div>
        </div>
        <div style={{ clear: 'both' }} />
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
    let searchResults, showResults;
    if (search.length >= MINIMUM_STR_LEN) {
      searchResults = this.props.events.filter((event) => {
        const regex = new RegExp(search, 'i');
        return event.title.search(regex) >= 0;
      });
      showResults = true;
    } else {
      searchResults = [];
      showResults = false;
    }
    this.setState({ [ev.target.name]: search, searchResults, showResults });
  }

  render() {
    return (
      <div className="macos-calendar-search-indicator" style={{ position: 'relative' }}>
        <TextField
          name="search"
          placeholder={i18n.get('search_events')}
          value={this.state.search}
          onChange={this.onChange}
          onFocus={this.onChange}
          onBlur={this.hideSearchResults}
          style={{ border: '1px solid #dedede' }}
        />
        <div className="search-results" style={SearchResultsStyle}>
          {this.renderSearchResults()}
        </div>
      </div>
    );
  }
}

export default SearchIndicator;
