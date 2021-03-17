import './styles.css';
import { ReactComponent as MainImg } from '../../Assets/having_fun.svg'
import Button from '@material-ui/core/Button';
import Footer from '../footer';

function Home(){
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
                                className = "btn_login" 
                                variant="contained" 
                                color="primary" 
                                href="/login">log in</Button>{'   '}

                            <Button 
                                className="btn_register"
                                href="/reg" 
                                variant="contained" 
                                color="primary">Registrar</Button>
                        </div>
                        <div className="btn_register">
                            
                        </div>
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