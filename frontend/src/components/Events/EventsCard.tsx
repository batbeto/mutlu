import { Event } from "../../services/typesEvent";
import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { formatPrice } from '../../util/util';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: 0,
      boxShadow: theme.shadows[5],
    },
  }),
);


type Props = {
  event: Event;
  onSelectEvent: (event: Event) => void;
  isSelected: boolean;
}


function EventsCard({ event, onSelectEvent, isSelected }: Props){
  const [open, setOpen] = React.useState(false); 
  
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div 
      className={`order-card-container ${isSelected ? 'selected' : ''}`}
      onClick = {() => onSelectEvent(event)}
      >
        <h3 className="order-card-title">
          {event.name}
        </h3>
        <img 
          className="order-card-image" 
          src={event.imageUri} alt={event.name}
          onClick={() => setOpen(true)}/>
          {open ? 
            <Modal
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
          >
            <div className="modal-body">
              <div className={classes.paper}>
                <img src={event.imageUri} alt={event.name} />
              </div>
            </div>
          </Modal>
          : null}
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
    </div>
  );
}


export default EventsCard;