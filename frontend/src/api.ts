import axios from "axios";
import { Event } from './services/typesEvent';
import { OrderPayload } from './services/typesOrder';


const local = 'http://localhost:8080';

const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

export const fetchEvents = () => ( axios(`${local}/events/all`));
export const fetchAllEvents = () => (axios(`${local}/events/all`));
export const postEvents = (data: Event) => (axios.post(`${local}/events`, data));
export const putEvents = (data: Event) => (axios.put(`${local}/events/${data.id}`, data))

export const fetchLocalMapBox = (local: string) =>
    (axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`))



export const fetchOrder = () =>(axios(`${local}/orders`));
export const postOrders = (data: OrderPayload) => (axios.post(`${local}/orders`, data));







