import { Events } from "./types";
import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Map from '../Maps'


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
      padding: theme.spacing(2, 4, 3),
    },
  }),
);


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
  const [open, setOpen] = React.useState(false);  
  const classes = useStyles();
    

    
    const handleClose = () => {
      setOpen(false);
    };

    return (
      <div>
        <div className="order-card-container">
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
                  <Map />
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