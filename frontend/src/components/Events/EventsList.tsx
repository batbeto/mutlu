import './styles.css';
import EventsCard from './EventsCard';
import { Event } from '../../services/typesEvent';
import { CheckisSelected } from '../../helpers/helpers';

type Props = {
    events: Event[];
    selectedEvent: Event[];
    onSelectEvent: (event: Event) => void;
}


function EventsList({ events, onSelectEvent, selectedEvent }: Props){
    return (
        <div className="orders-list-container"> 
            <div className="orders-list-items">
                {events.map( events => (
                <EventsCard 
                    key={events.id} 
                    event={events} 
                    onSelectEvent={onSelectEvent}
                    isSelected={CheckisSelected(selectedEvent, events)}
                    />
                    ))}
            </div>    
        </div>
    )
}

export default EventsList;