import axios from "axios"



const local = 'http://localhost:8080';


export const fetchEvents = () => ( axios(`${local}/events`))




