import axios from "axios";



const local = 'http://localhost:8080';

const mapboxToken = '';

export const fetchEvents = () => ( axios(`${local}/events`))



export const fetchLocalMapBox = (local: string) =>
    (axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`))











