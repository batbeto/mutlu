import { Events } from "./types";


type Props = {
  event: Events;
}

function formatPrice(price: number){
  const formatter = new Intl.NumberFormat(('pt-BR'), {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2

  });

  return formatter.format(price);
}

function EventsCard({ event }: Props){

    return (
        <div className="order-card-container">
          <h3 className="order-card-title">
            {event.name}
          </h3>
          <img 
            className="order-card-image" 
            src={event.imageUri} alt={event.name}/>
          <h3 className="order-card-price">
             {formatPrice(event.price)}
          </h3>
          <div className="order-card-description">
            <h3>Descrição:</h3>
            <p>
              {event.description}
            </p>
          </div>
          
        </div>
    );
  }


export default EventsCard;