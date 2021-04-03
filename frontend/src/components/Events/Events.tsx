import Steps from './Steps';
import EventsList from './EventsList';
import './styles.css';
import { useEffect, useState } from 'react';
import { Event } from '../../services/types'
import { fetchEvents } from '../../api';
import SnackbarContent from '@material-ui/core/SnackbarContent';


export default function Events(){
    const [events, setEvents] = useState<Event[]>([]);

    useEffect( () => {
        fetchEvents()
            .then(response => setEvents(response.data))
            .catch(error =>
                <span>
                    <SnackbarContent message="Erro ao listar os eventos" action={'x'} />
                </span>
             )
    },[]);
    return (
        <div className="orders-container">
            <Steps />
            <EventsList events={events} />         
        </div>
    )

}


