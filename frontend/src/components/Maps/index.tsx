import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { fetchLocalMapBox } from '../../api';



const initialPosition = {
  lat: 53.0,
  lng: -0.09
}
type Place = {
  label?: string;
  value?: string;
  position: {
    lat: number;
    lng: number;
  }
}

function Map() {
  const [address, setAddress] = useState<Place>({
    position: initialPosition
  });
  
  const loadOptions = (inputValue: string, callback:(place: Place[]) => void): void => {
    fetchLocalMapBox(inputValue).then(({data}) => {
      callback(data.features.map((item: any) => ({
        label: item.place_name,
        value: item.place_name,
        posiition: {
          lat: item.center[1],
          lng: item.center[0]
        }
      })))
    })
 }

  const handleChangeSelect = (place: Place) => {
    setAddress(place);
    //onChangeLocation({
    //  latitude: place.position.lat,
    //  longitude: place.position.lng,
    //  address: place.label!
    //});
  };
  return (
    <div className="order-location-container">
      <div className="order-location-content">
        <h3 className="order-location-title">
          Selecione a localidade:
        </h3>
        <div className="filter-container">
          <AsyncSelect
            placeholder="Digite sua cidade "
            className="filter"
            loadOptions={loadOptions}
            onChange={value => handleChangeSelect(value as Place)}
          />
        </div>
        <div className="map-container">
          <MapContainer style={{ width: "100%", height: "300px" }} center={address.position} zoom={13} scrollWheelZoom>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Marker position={address.position}>
              <Popup>
                <span>Marcador</span>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  )
}

export default Map;