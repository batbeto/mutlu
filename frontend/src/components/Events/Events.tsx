import Steps from './Steps';
import EventsList from './EventsList';
import './styles.css';
import { useContext, useEffect, useState } from 'react';
import { Event } from '../../services/typesEvent'
import { fetchEvents, postOrders } from '../../api';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { CheckisSelected } from '../../util/util';
import { OrderPayload } from '../../services/typesOrder';
import { toast } from 'react-toastify';



export default function Events(){
    const [orders, setOrders] = useState<OrderPayload>();
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

    
    const handleSubmit = () => {
        const eventIds = selectedEvent.map(({ id }) => ({ id }));
        const payload = {
          ...orders!,
          event: eventIds
        }
      
        postOrders(payload).then(() => {
          toast.error('Redirecionando para metodo de pagamento!');
          setSelectedEvent([]);
        })
          .catch(() => {
            toast.warning('Erro ao enviar pedido');
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


