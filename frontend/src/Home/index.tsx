import './styles.css';
import Button from 'react-bootstrap/Button';
import { ReactComponent as MainImg } from '../assets/main-img.svg'

function Home(){
    return (
        <div className="home-container">
            <div className="home-content">
                <div className="home-actions">
                    <h1 className="home-title"> 
                        Procure o evento <br /> mais proximo de <br /> <strong className="voce">você</strong>!!!
                    </h1>
                    <h3 className="home-subtitle">
                        Escolha o evento clicando no botão abaixo.
                    </h3>
                    <Button href="#" variant="primary">ENCONTRAR</Button>
                </div>
                <div className="home-img">
                    <MainImg 
                        padding-top = "0px"
                        width = "600px"
                        height = "600px"
                    />
                </div>
            </div>
        </div>
    )
}


export default Home;