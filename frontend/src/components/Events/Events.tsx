import Steps from './Steps';
import EventsList from './EventsList';
import './styles.css';
import { useEffect, useState } from 'react';
import { Event } from '../../services/typesEvent'
import { fetchEvents, postOrders } from '../../api';
import { CheckisSelected } from '../../helpers/helpers';
import { OrderPayload } from '../../services/typesOrder';
import { toast } from 'react-toastify';




export default function Events(){
    
    const [orders] = useState<OrderPayload>();
    const [events, setEvents] = useState<Event[]>([]);
    const [selectedEvent, setSelectedEvent] = useState<Event[]>([]);
    
    const totalPrice = selectedEvent.reduce((sum, item) => { return sum + item.price}, 0);
    
    useEffect( () => {
        fetchEvents()
            .then(response => setEvents(response.data))
            .catch(() =>
              toast.warning('Erro ao carregar eventos')
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

    
    const handleSubmit = () => {
        const eventIds = selectedEvent.map(({ id }) => ({ id }));
        const payload = {
          ...orders!,
          moment: new Date(),
          total: totalPrice,
          status: 0,
          event: eventIds
        }
      
        postOrders(payload)
          .then(() => {
            console.log(payload)
            toast.error('Compra realizada!');
            setSelectedEvent([]);
        })
          .catch(() => {
            toast.warning('Erro ao enviar compra');
        })
      }
         

    return (
        <>
            <div className="orders-container">
                <Steps 
                    amount={selectedEvent.length} 
                    totalPrice={totalPrice}
                    onSubmit={handleSubmit} />
                <EventsList 
                    events={events}
                    onSelectEvent={handleSelectEvent}
                    selectedEvent={selectedEvent}
                     />                         
            </div>
            
        </>
    )

}


