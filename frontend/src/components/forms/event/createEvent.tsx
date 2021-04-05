import "leaflet/dist/leaflet.css";
import { Map, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import Leaflet from "leaflet";
import mapPin from "../../../assets/pin.svg";
import mapHappy from "../../../assets/happy.svg";
import './styles.css';
import { Event } from '../../../services/types';
import { FormEvent, useState } from 'react';
import { fetchLocalMapBox } from "../../../api";
import DatePicker from "react-datepicker";
import AsyncSelect from "react-select/async";

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
    const [eventsEntities, setEventsEntities] = useState<Event[]>([]);

    const [address, setAddress] = useState<Place>({
        position: initialPosition
    })
        
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [tickets, setTickets] = useState(0);
    const [price, setPrice] = useState(0);
    const [imageUri, setimageUri] = useState('');
    const [date, setDate] = useState(new Date());

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
    
    async function handleSubmit(event: FormEvent) {
        event.preventDefault()
        if(!address || !name) return;

        setEventsEntities([
            ...eventsEntities,{
                name,
                address: address?.value || "",
                date,
                description,
                latitude: address.position.lat,
                longitude: address.position.lng,
                price ,
                tickets,
                imageUri
            }
        ])
        setAddress({ position: initialPosition })
        setDescription('')
        setTickets(0)
        setPrice(0)
        setimageUri('')
        setDate(new Date())
    }

    return( 
        <div id="page-map">
            <LocationMarker />
            <main>
                <form onSubmit={handleSubmit} className="landing-page-form">
                    <fieldset>
                        <legend>Entregas</legend>

                        <div className="input-block">
                        <label htmlFor="name">Nome</label>
                        <input
                            id="name"
                            placeholder="Digite seu nome"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        </div>

                        <div className="input-block">
                        <label htmlFor="address">Endereço</label>
                        <AsyncSelect
                            placeholder="Digite seu endereço..."
                            classNamePrefix="filter"
                            cacheOptions
                            loadOptions={loadOptions}
                            onChange={value => handleChangeSelect(value as Place)}
                            value={address}
                        />
                        </div>

                        <div className="input-block">
                        <label htmlFor="tickets">Qtd. Tickets</label>
                        <input
                            placeholder="Qtd. Tickets"
                            id="tickets"
                            value={tickets}
                            onChange={(event) => setTickets(event.target.value)}
                        />
                        </div>
                    </fieldset>

                    <button className="confirm-button" type="submit">
                        Confirmar
                    </button>
                </form>
            </main>
        </div>
    );
}

export default CreateEvent;




