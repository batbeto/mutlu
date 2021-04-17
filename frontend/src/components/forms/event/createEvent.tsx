import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";
import mapPin from "../../../assets/pin.svg";
import mapGuitar from "../../../assets/guitar.svg";
import './styles.css';
import { Event } from '../../../services/types';
import { FormEvent, useState, useEffect } from 'react';
import { fetchLocalMapBox, fetchEvents } from "../../../api";
import AsyncSelect from "react-select/async";
import TextField from '@material-ui/core/TextField';
import CurrencyInput from 'react-currency-input-field';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const initialPosition = { lat: -22.2154042, lng: -44.8331331 };

type Place = {
    label?: string;
    value?: string;
    position: {
      lat: number;
      lng: number;
    }
}

const mapPinIcon = Leaflet.icon({
    iconUrl: mapPin,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
  });
const mapGuitarIcon = Leaflet.icon({
    iconUrl: mapGuitar,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
});

function CreateEvent(){
    const [eventsEntities, setEventsEntities] = useState<Event[]>([]);

    const [address, setAddress] = useState<Place>({
        position: initialPosition
    })
        
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [tickets, setTickets] = useState(1);
    const [price, setPrice] = useState(0);
    const [imageUri, setImageUri] = useState('');
    const [date, setDate] = useState(new Date());
    
    useEffect( () => {
        fetchEvents()
            .then(response => setEventsEntities(response.data))
            .catch(() =>
                <span>
                    <SnackbarContent message="Erro ao listar os eventos" action={'x'} />
                </span>
             )
    },[]);

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
                price,
                tickets,
                imageUri
            }
        ])
        setAddress({ position: initialPosition })
        setDescription('')
        setTickets(1)
        setPrice(0)
        setImageUri('')
        setDate(new Date())
    }
    function handleChangeTickets(e: any) {
        const { value } = e.target
        if (value >= 1){
            setTickets(e.target.value)
        }
    }
    function handleChangePrice(value: any){
        setPrice(value)
    }

    return( 
        <div id="page-map">
            <main>
                <form onSubmit={handleSubmit} className="landing-page-form">
                    <fieldset>
                        <legend>Eventos</legend>

                        <div className="input-block">
                        <label htmlFor="name">Nome</label>
                        <input
                            id="name"
                            placeholder="Digite seu nome"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            required={true}
                        />
                        </div>

                        <div className="input-block">
                            <label htmlFor="address">Endereço</label>
                            <AsyncSelect
                                placeholder="Digite seu endereço..."
                                classNamePrefix="filter"
                                cacheOptions
                                required={true}
                                loadOptions={loadOptions}
                                onChange={value => handleChangeSelect(value as Place)}
                                value={address}
                            />
                        </div>
                        <TextField
                            id="datetime-local"
                            label="Data/Hora"
                            type="datetime-local"
                            className='input-block'
                            required={true}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            InputProps={{
                                disableUnderline: true,
                            }}
                        />

                        <div className="input-block">
                        <label htmlFor="price">Preço</label>
                        <CurrencyInput 
                            className="input-block"
                            placeholder="Valor"
                            id="price"
                            allowNegativeValue={false}                           
                            value={price}
                            onValueChange={value => handleChangePrice(value)}
                            intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
                        />
                        </div>
                        <div className="input-block">    
                        <label htmlFor="tickets">Qtd. Tickets</label>
                        <input
                            placeholder="Qtd. Tickets"
                            type='number'
                            id="tickets"
                            value={tickets}
                            onChange={handleChangeTickets}
                        />
                        </div>
                        <div className="input-block">    
                        <label htmlFor="imgUri">Imagem</label>
                        <input
                            placeholder="URL do poster"
                            type='text'
                            id="imgUri"
                            value={imageUri}
                            onChange={(event) => setImageUri(event.target.value)}
                        />
                        </div>
                        <div className="input-block">
                        <label htmlFor="description">Descrição do Evento</label>
                        <input
                            placeholder="Descrição do evento"
                            type='text'
                            id="description"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                        </div>
                    </fieldset>

                    <button className="confirm-button" type="submit">
                        Confirmar
                    </button>
                </form>
            </main>
            <MapContainer
                key={address.position.lat}
                center={address.position}
                zoom={13}
                style={{ width: "100%", height: "100%" }}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                {address.position && (
                <Marker
                    icon={mapPinIcon}
                    position={[address.position.lat, address.position.lng]}
                ></Marker>
                )}

                {eventsEntities.map((eventsEntities) => (
                <Marker   
                    key={eventsEntities.id}
                    icon={mapGuitarIcon}
                    position={[eventsEntities.latitude, eventsEntities.longitude]}>
                    <Popup
                        closeButton={false}
                        minWidth={240}
                        maxWidth={240}
                        className="map-popup"
                    >
                    <div>
                        <h3>{eventsEntities.name}</h3>
                        <p>
                            {eventsEntities.address}
                            {eventsEntities.price}
                        </p>
                    </div>
                    </Popup>
                </Marker>
                ))}
            </MapContainer>
        </div>
    );
}

export default CreateEvent;




