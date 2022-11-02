import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
      location: ''
  };
  
  fetchData = (evt) => {
    evt.preventDefault();
    let location = encodeURIComponent(this.state.location);

    let apiKey = '39077aa52648b860160251e27d399aa7';
    let url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + '&APPID=' + apiKey + '&units=metric';
  };

  changeLocation = (evt) => {
    this.setState({
      location: evt.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Weather</h1>
        <form onSubmit={this.fetchData}>
          <label>I want to know the weather for
            <input
              placeholder={"City, Country"}
              type="text"
              value={this.state.location}
              onChange={this.changeLocation}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default App;