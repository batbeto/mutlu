import './styles.css';
import { ReactComponent as Logo } from '../../assets/location_brasil.svg';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Login from '../login'
import Button from '@material-ui/core/Button';

function Mainavbar(){
    const [open, setOpen] = useState(false);

    const handleClose = () =>{
        setOpen(false);
    }
    return(
        
        <Navbar bg="dark" variant="dark" className="main-navbar">
            <Navbar.Brand href="/">
                <Logo
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Mutlu
            </Navbar.Brand>
            <Navbar.Brand className="btn_position">
                <Button 
                    className = "btn_eventos" 
                    variant="contained" 
                    color="secondary"
                    onClick={() => setOpen(true)} 
                    >ENTRAR</Button>
            </Navbar.Brand>
            <Modal
                className="modalLogin"
                open={open}
                onClose={handleClose}
                closeAfterTransition >
                    <div className="modal-body">
                        <div className="modal-content">
                            <Login />
                        </div>
                    </div>
            </Modal>
        </Navbar>
        
   
    )
}


export default Mainavbar;