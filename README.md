# My Calendar

### Familiar with Npm?

```
> npm install --save macos-calendar
```

```jsx
import React, { Component } from 'react';
import Calendar from 'macos-calendar';

const AppStyle = {
  width: '600px',
  height: '600px'
};

class App extends Component {
  onEventAdd = (event) => {
    console.log(event);
  }
  render() {
    return (
      <div className="App" style={AppStyle}>
        <Calendar
          onEventAdd={this.onEventAdd}
        />
      </div>
    );
  }
}

export default App;

```
## Features
* Add Edit Event
* Search Events
* Navigate months


Demo available at: http://mustafaarikan.net/macos-calendar/
