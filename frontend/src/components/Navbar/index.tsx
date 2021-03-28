import './styles.css';
import { ReactComponent as Logo } from '../../assets/location_brasil.svg';
import Navbar from 'react-bootstrap/Navbar';
import Login from '../login'


function Mainavbar(){
    
    return(
        
        <Navbar bg="dark" variant="dark" className="main-navbar">
            <Navbar.Brand href="/">
                <Logo
                    width="30px"
                    height="30px"
                    className="d-inline-block align-top"
                />{' '}
                Mutlu
            </Navbar.Brand>
            <Navbar.Brand className="btn_position">
                <Login />
            </Navbar.Brand>
        </Navbar>
        
   
    )
}


export default Mainavbar;