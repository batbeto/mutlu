import axios from "axios";
import { Event } from './services/typesEvent';
import { OrderPayload } from './services/typesOrder';
import { User } from "./services/typesUser";


const local = 'http://localhost:8080';
const API_URL = process.env.REACT_APP_API_URL;

const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

//Events
export const fetchEvents = () => ( axios(`${API_URL}/events/all`));
export const fetchAllEvents = () => (axios(`${API_URL}/events/all`));
export const postEvents = (data: Event) => (axios.post(`${API_URL}/events`, data));
export const putEvents = (data: Event) => (axios.put(`${API_URL}/events/${data.id}`, data))

//Map
export const fetchLocalMapBox = (local: string) =>
    (axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`))


//Orders
export const fetchOrder = () =>(axios(`${API_URL}/orders`));
export const postOrders = (data: OrderPayload) => (axios.post(`${API_URL}/orders`, data));

//Users
export const fetchUsers = () => (axios(`${API_URL}/users`));
export const loginUser = (user: {email: string, pass: string}) => (axios.post(`${API_URL}/users/login`),user)
export const postUsers = (data: User) => (axios.post(`${API_URL}/users`, data))
export const putUsers = (data: User) => (axios.put(`${API_URL}/users/${data.id}`, data))

