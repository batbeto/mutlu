import './styles.css';
import { ReactComponent as Logo } from '../../../Assets/location_brasil.svg';
import Navbar from 'react-bootstrap/Navbar'

function Mainavbar(){
    return(
        <>
            <Navbar bg="dark" variant="dark" fixed="top" className="main-navbar">
                <Navbar.Brand href="/">
                    <Logo
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Mutlu
                </Navbar.Brand>
            </Navbar>
        </>
   
    )
}


export default Mainavbar;