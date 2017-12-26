import React, { Component } from 'react';
import axios from 'axios';
import keys from '../utils/keys';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';


const styles = {
    container: {
        display: 'flex',
        flex: '.5 1 auto'
      },
    input: {
        width: '50%',
    }
  }

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({ value: event.target.value });
        console.log(this.state.value);
    }

    handleSubmit(event) {
        event.preventDefault();
        
        axios.get('https://maps.googleapis.com/maps/api/geocode/json?', {
            params: {
              address: this.state.value,
              key: keys.google.API_KEY
            }
          })
          .then((response) => {
            console.log('geocoding',response.data.results[0].geometry.location);
            let location = response.data.results[0].geometry.location;

            console.log('search lat lng:', location.lat, location.lng);
            this.props.searchCity(location.lat, location.lng);
          })
          .catch((error) => {
            console.log(error);
          });
    }

    render() {
        return (
            <form style={styles.container}>
                <TextField
                    id="full-width"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    placeholder="Look for food"
                    fullWidth
                    margin="normal"
                    onChange={this.handleChange}
                    value={this.state.value}
                />
                <Button onClick={this.handleSubmit}>search</Button>
            </form>
        );
    }
}