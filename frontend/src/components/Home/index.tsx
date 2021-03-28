import './styles.css';
import { ReactComponent as MainImg } from '../../assets/having_fun.svg'
import Button from '@material-ui/core/Button';
import Footer from '../footer';
import { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Login from '../login'

function Home(){   
    const [open, setOpen] = useState(false);

    const handleClose = () =>{
        setOpen(false);
    }

    return (
        <>
            <div className="home-container">
                <div className="home-content">
                    <div className="home-actions">
                        <h1 className="home-title"> 
                            Procure o evento <br /> mais proximo de <br /> <strong className="voce">você</strong>!!!
                        </h1>
                        <h3 className="home-subtitle">
                            Vamos começar escolhendo a opção abaixo.
                        </h3>
                        <div className="btn">
                            <Button 
                                className = "btn_eventos" 
                                variant="contained" 
                                color="secondary"
                                onClick={() => setOpen(true)} 
                                >ENTRAR COMO</Button>
                        </div>
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
                    </div>
                    <div className="home-image">
                        <MainImg />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}


export default Home;