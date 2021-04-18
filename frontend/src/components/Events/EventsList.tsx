import './styles.css';
import EventsCard from './EventsCard';
import { Event } from '../../services/types';

type Props = {
    events: Event[]
}


function EventsList({events}: Props){
    return (
        <div className="orders-list-container"> 
            <div className="orders-list-items">
                {events.map( events => (<EventsCard key={events.id} event={events} />))}
            </div>    
        </div>
        
    )
}

export default EventsList;