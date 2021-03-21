import './styles.css';
import EventsCard from './EventsCard';
import { Events } from './types';

type Props = {
    events: Events[]
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