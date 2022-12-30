import { Component } from 'react';
import Map from 'react-map-gl';


export default function Site({lat,lng}) {
  console.log(lng)
  console.log(lat)

  return (
    <Map
      initialViewState={{
      longitude: lng,
      latitude: lat,
      zoom: 16.65
    }}
      mapStyle="mapbox://styles/garrim/cl5js8prj003d15pjrja960zv"
      mapboxAccessToken="pk.eyJ1IjoiZ2FycmltIiwiYSI6ImNramc4aWRkMTE0ZzAyeXFwZG54eTFobnIifQ.zUa-muVxXAh3Dl6IJQY70g"
    />)
}
