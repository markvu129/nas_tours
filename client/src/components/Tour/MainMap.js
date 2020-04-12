import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

export const MainMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: props.lat, lng: props.lng }}
    >
      <Marker position={{ lat: props.lat, lng: props.lng }} />
    </GoogleMap>
  ))
);
