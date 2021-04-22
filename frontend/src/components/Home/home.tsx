import './styles.css';
import { ReactComponent as MainImg } from '../../assets/having_fun.svg'
import Footer from '../footer';


export default function Home(){   
    

    return (
        <>
            <div className="home-container">
                <div className="home-content">
                    <div className="home-actions">
                        <h1 className="home-title"> 
                            Procure o evento <br /> mais proximo de <br /> <strong className="voce">você</strong>!!!
                        </h1>
                        <h3 className="home-subtitle">
                            Venha se divertir conosco!!!
                        </h3> 
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


