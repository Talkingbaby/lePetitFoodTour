import React, { Component } from 'react';

const google = window.google;
console.log(google);

const Marker = ({map, position}) => {
  return new google.maps.Marker({
    map,
    position
  });
}

export default class Map extends Component {
  constructor(props) {
    super(props);

    // this.addMarker = this.addMarker.bind(this);
    this.renderMap = this.renderMap.bind(this);
    this.callback = this.callback.bind(this);
    this.createMarker = this.createMarker.bind(this);
  }
  componentDidMount() {
    this.renderMap({lat: this.props.lat, lng: this.props.lng});
  }

  shouldComponentUpdate(nextProps) {
    console.log('next props', nextProps);
    this.renderMap(nextProps);
    return true;
  }

  renderMap(center) {
    this.map = new google.maps.Map(this.refs.map, {
      center,
      zoom: 12
    });

    let request = {
      location: center,
      radius: '5000',
      type: ['cafe']
    };

    let service = new google.maps.places.PlacesService(this.map);
    service.nearbySearch(request, this.callback);

    // let markers = this.state.locations.map((location, i) => {
    //   return new google.maps.Marker({
    //     position: location,
    //     label: i.toString(),
    //     map: this.map
    //   });
    // });
  }

  callback(results, status) {
    console.log('callback results',results);
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      results.map((location, i) => {
        return this.createMarker(location);
      })
    }
  }

  createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: this.map,
      position: place.geometry.location
    });

    marker.addListener('click', function() {
      this.map.setZoom(8);
      this.map.setCenter(marker.getPosition());
    });
  }

render() {
  const mapStyle = {
    width: '100%',
    height: '90vh',
    marginTop: '10vh',
  };

  return (
    <div ref="map" style={mapStyle}>
    </div>
  );
}
}