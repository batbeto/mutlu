import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import Leaflet from "leaflet";
import mapPin from "../../../assets/pin.svg";
import mapHappy from "../../../assets/happy.svg";
import './styles.css';
import { Event } from '../../../services/types';
import { useState } from 'react';
import { fetchLocalMapBox } from "../../../api";

const initialPosition = { lat: -22.2154042, lng: -54.8331331 };

type Place = {
    label?: string;
    value?: string;
    position: {
      lat: number;
      lng: number;
    }
}
const LocationMarker = () => {
    const [positionUser, setPositionUser] = useState<Place>({
        position: initialPosition
    })
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPositionUser({
            position: {
                lat: e.latlng.lat,
                lng: e.latlng.lng
            }})
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return positionUser === null ? null : (
      <Marker position={positionUser.position}>
        <Popup>Você está aqui!</Popup>
      </Marker>
    )
}
const mapPinIcon = Leaflet.icon({
    iconUrl: mapPin,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
  });
const mapHappyIcon = Leaflet.icon({
    iconUrl: mapHappy,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
});

interface Props {
    event: Event;
}


function CreateEvent({ event }: Props){
    const [addrress, setAddress] = useState<Place>({
        position: initialPosition
    })
    const [newEvent, setNewEvent] = useState<Event>();

    const loadOptions = (inputValue: string, callback:(place: Place[]) => void): void => {
        fetchLocalMapBox(inputValue).then(({data}) => {
            callback(data.features.map((item: any) => ({
            label: item.place_name,
            value: item.place_name,
            position: {
                lat: item.center[1],
                lng: item.center[0]
            }
            })))
        })
    }
    
    const handleChangeSelect = (place: Place) => {
        setAddress(place);
      };
    
    async function handleSubmit(event: any) {
        event.preventDefault()
    }

    return(
        <form onSubmit={handleSubmit} className="form-event" noValidate autoComplete="off">
            <LocationMarker />
        </form>
    );
}

export default CreateEvent;