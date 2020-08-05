import React, { Component } from "react";

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon,
      },
    });
  }

  render() {
    const { name, country } = this.props;
    return (
      <div>
        <div>{`${name}, ${country}`}</div>
        <div ref="map" />
      </div>
    );
  }
}

export default GoogleMap;
