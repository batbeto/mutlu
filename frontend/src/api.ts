import axios from "axios";



const local = 'http://localhost:8080';

const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

export const fetchEvents = () => ( axios(`${local}/events`))



export const fetchLocalMapBox = (local: string) =>
    (axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`))











