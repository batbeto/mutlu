import Steps from './Steps';
import EventsList from './EventsList';
import './styles.css';

function Orders(){
    return (
        <div className="orders-container">
            <Steps />
            <EventsList />              
        </div>
    )

}


export default Orders;