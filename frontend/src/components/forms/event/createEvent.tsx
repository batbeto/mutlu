import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import { Event } from '../../../services/types';
import { useState } from 'react';

interface Props {
    event: Event;
}

function CreateEvent({event}: Props){
    const [newEvent, setNewEvent] = useState<Event>();

    const handleSubmit = () =>{

    }

    return(
        <form onSubmit={handleSubmit} className="form-event" noValidate autoComplete="off">
            
        </form>
    );
}

export default CreateEvent;