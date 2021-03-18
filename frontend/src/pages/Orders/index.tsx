import Steps from './Steps';
import EventsList from './EventsList';
import './styles.css';
import { useEffect } from 'react';

function Orders(){

    useEffect( () => {
        
    },[]);

    return (
        <div className="orders-container">
            <Steps />
            <EventsList />              
        </div>
    )

}


export default Orders;