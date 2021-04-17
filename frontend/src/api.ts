import axios from "axios";
import { Event, Order } from './services/types'


const local = 'http://localhost:8080';

const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

export const fetchEvents = () => ( axios(`${local}/events`))
export const postEvents = (data: Event) => (axios.post(`${local}/events`, data))


export const fetchLocalMapBox = (local: string) =>
    (axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`))



export const fetchOrder = () =>(axios(`${local}/orders`))
export const postOrders = (data: Order) => (axios.post(`${local}/orders`, data))
export const putOrdersPending = (data: Order) => (axios.put(`${local}/orders/${data.id}/pending`, data))
export const putOrdersConclused = (data: Order) => (axios.put(`${local}/orders/${data.id}/conclused`, data))





