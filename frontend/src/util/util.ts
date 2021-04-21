import { Event } from '../services/typesEvent';

export function CheckisSelected(selectedEvent: Event[], event: Event){
    return selectedEvent.some(item => item.id === event.id);
}

export function formatPrice(price: number){
    const formatter = new Intl.NumberFormat(('pt-BR'), {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2
  
    });
  
    return formatter.format(price);
  }