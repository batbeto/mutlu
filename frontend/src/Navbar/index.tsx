import './styles.css';
import { ReactComponent as Logo } from './location_brasil.svg';
import Navbar from 'react-bootstrap/Navbar'

function Mainavbar(){
    return(
        <div>
            <Navbar bg="dark" variant="dark" className="main-navbar">
                <Navbar.Brand href="#home">
                    <Logo
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Mutlu
                </Navbar.Brand>
            </Navbar>
        </div>
   
    )
}


export default Mainavbar;