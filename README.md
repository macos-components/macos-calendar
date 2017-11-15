# My Calendar

### Familiar with Npm?

```
> npm install --save macos-calendar
```

```jsx
import React, { Component } from 'react';
import Calendar from 'macos-calendar';
import './App.css';
import tr from './tr.js';

const AppStyle = {
  width: '600px',
  height: '600px'
};

class App extends Component {
  onEventAdd = (event) => {
    // console.log(event);
  }
  onEventEdit = (event) => {
    // console.log(event);
  }
  onEventRemove = (event) => {
    // console.log(event);
  }
  render() {
    const languages = [{
      name: 'tr',
      value: tr
    }];

    const events = [{
      title: 'Initial Event',
      description: 'Initial Event Description',
      startTime: '18:00',
      endTime: '19:00',
      date: new Date()
    }];

    const date = new Date();
    date.setDate(date.getDate() + 40);

    return (
      <div className="App" style={AppStyle}>
        <p>
          {`Double click to day squares to add new event. Single click to the existing events to edit.
             You must type minimum 3 characters to see search results`}
        </p>
        <Calendar
          onEventAdd={this.onEventAdd}
          onEventEdit={this.onEventEdit}
          onEventRemove={this.onEventRemove}
          languages={languages}
          defaultLanguage="tr"
          events={events}
          date={date}
        />
      </div>
    );
  }
}

export default App;

```

* Exampla language file:

```js
export default {
  calendar: 'Takvim',
  month_0: 'Ocak',
  month_1: 'Şubat',
  month_2: 'Mart',
  month_3: 'Nisan',
  month_4: 'Mayıs',
  month_5: 'Haziran',
  month_6: 'Temmuz',
  month_7: 'Ağustos',
  month_8: 'Eylül',
  month_9: 'Ekim',
  month_10: 'Kasım',
  month_11: 'Aralık',
  month_0_short: 'Oca',
  month_1_short: 'Şub',
  month_2_short: 'Mar',
  month_3_short: 'Nis',
  month_4_short: 'May',
  month_5_short: 'Haz',
  month_6_short: 'Tem',
  month_7_short: 'Ağu',
  month_8_short: 'Eyl',
  month_9_short: 'Eki',
  month_10_short: 'Kas',
  month_11_short: 'Ara',
  day_0: 'Pazar',
  day_1: 'Pazartesi',
  day_2: 'Salı',
  day_3: 'Çarşamba',
  day_4: 'Perşembe',
  day_5: 'Cuma',
  day_6: 'Cumartesi',
  day_0_short: 'Paz',
  day_1_short: 'Pzt',
  day_2_short: 'Sal',
  day_3_short: 'Çar',
  day_4_short: 'Per',
  day_5_short: 'Cum',
  day_6_short: 'Cts',
  today: 'Bugün',
  new_event: 'Yeni Etkinlik',
  enter_description: 'Açıklama giriniz.',
  search_events: 'Etkinlikleri Ara'
};
```
## Features
* Add Edit Event
* Search Events
* Navigate months
* Multiple Language


Demo available at: http://mustafaarikan.net/macos-calendar/
