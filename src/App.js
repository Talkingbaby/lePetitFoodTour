import React, { Component } from 'react';
import Map from './UI/Map';
import SimpleAppBar from './UI/SimpleAppBar';
import ResultCard from './UI/ResultCard';

const styles = {
  results: {
    position: 'absolute',
    zIndex: 2,
    left: 10,
    top: '5rem',
    overflow: 'scroll',
    height: '88vh'
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      lat: 33.6694649,
      lng: -117.8231107,
      food: []
    }

    this.searchCity = this.searchCity.bind(this);
    this.grabFood = this.grabFood.bind(this);
  }

  searchCity(lat, lng) {
    this.setState({
      lat,
      lng,
    });
    // console.log('search city', this.state);
  }

  grabFood(results){
    this.setState({
      food: results
    });
  }

  render() {
    return (
      <div>
        <SimpleAppBar searchCity={this.searchCity} />
        <Map
          lat={this.state.lat}
          lng={this.state.lng}
          grabFood={this.grabFood}
        />
            <div className="results" style={styles.results}>
              {
                this.state.food === undefined
                ?
                null
                :
                this.state.food.map((place, i) => {
                  return place === undefined ? <p>No results</p> : <ResultCard key={i} place={place} />
              })
            }
            </div>
      </div>
    );
  }
}

export default App;
