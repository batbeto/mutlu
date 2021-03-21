import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';




const position = {
  lat: 51.505,
  lng: -0.09
};

function Map(){  
  
  return (
    <div className="map-container">
      <MapContainer style={{width: "100%", height: "300px" }}  center={position} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
)}

export default Map;