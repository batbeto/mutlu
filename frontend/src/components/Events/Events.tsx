import Steps from './Steps';
import EventsList from './EventsList';
import './styles.css';
import { useEffect, useState } from 'react';
import { Event } from '../../services/types'
import { fetchEvents } from '../../api';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { CheckisSelected } from '../../util/util';


export default function Events(){
    const [events, setEvents] = useState<Event[]>([]);
    const [selectedEvent, setSelectedEvent] = useState<Event[]>([]);
    const totalPrice = selectedEvent.reduce((sum, item) => { return sum + item.price}, 0);

    useEffect( () => {
        fetchEvents()
            .then(response => setEvents(response.data))
            .catch(() =>
                <span>
                    <SnackbarContent message="Erro ao listar os eventos" action={'x'} />
                </span>
             )
    },[]);

    const handleSelectEvent = (event: Event) => {
        const isAlreadySelected = CheckisSelected(selectedEvent, event);
      
        if (isAlreadySelected) {
          const selected = selectedEvent.filter(item => item.id !== event.id);
          setSelectedEvent(selected);
        } else {
          setSelectedEvent(previous => [...previous, event]);
        }
    }

    return (
        <>
            <div className="orders-container">
                <Steps amount={selectedEvent.length} totalPrice={totalPrice} />
                <EventsList 
                    events={events}
                    onSelectEvent={handleSelectEvent}
                    selectedEvent={selectedEvent}
                     />                         
            </div>
            
        </>
    )

}


