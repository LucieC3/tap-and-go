import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { staticDatas } from '../data/staticDatas.js';

const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  // GPS datas of Nantes //
  const center = {
    lat: 47.218371,
    lng: -1.553621
  };


const Map = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyA9ut5eJTA_vg9SyvlBXuF8XlIIOja0Sk0"
      })

      const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

    
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {staticDatas.map((mark, index) => <Marker key={index} clickable={true} position={{ lat: mark.latitude, lng: mark.longitude }} />)}
      <></>
    </GoogleMap>
) : <></>
}
export default React.memo(Map);
