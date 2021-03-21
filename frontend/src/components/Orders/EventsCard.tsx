import { Events } from "./types";
import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';


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
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <div className="modal-body">
                <div className={classes.paper}>
                <iframe title="google maps"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4701848188447!2d-37.0922785!3d-6.461960200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7afedaf9ddee1d3%3A0x57e2ecb3f685fd6b!2sR.+Prof.+Jos%C3%A9+Gurgel%2C+Caic%C3%B3+-+RN%2C+59300-000!5e0!3m2!1spt-BR!2sbr!4v1438867161651" width="100%" height="450" frameBorder="0" allowFullScreen></iframe>
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