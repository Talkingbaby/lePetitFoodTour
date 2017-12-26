import React, { Component } from 'react';
import Map from './UI/Map';
import SimpleAppBar from './UI/SimpleAppBar';




class App extends Component {
  constructor(){
    super();
    this.state = {
      lat: 33.6694649,
      lng: -117.8231107,
      food: ''
    }

    this.searchCity = this.searchCity.bind(this);
  }

  searchCity(lat, lng) {
    this.setState({
      lat,
      lng,
    });
    console.log('search city',this.state);
  }

  render() {
    return (
      <div>
        <SimpleAppBar searchCity={this.searchCity}/>
        <Map
          lat={this.state.lat}
          lng={this.state.lng}
        />
      </div>
    );
  }
}

export default App;
