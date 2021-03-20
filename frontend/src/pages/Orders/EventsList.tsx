import './styles.css';
import EventsCard from './EventsCard';

function EventsList(){
    return (
        <div className="orders-list-container">
            
            <div className="orders-list-content">
                <div className="orders-list-items">
                    <EventsCard />
                    
                </div>
                
            </div>
        </div>
    )
}

export default EventsList;