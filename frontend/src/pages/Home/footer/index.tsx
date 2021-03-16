import './styles.css';
import { ReactComponent as Gitlogo } from '../../../Assets/github.svg';
import { ReactComponent as Instalogo } from '../../../Assets/instagram.svg';

function Footer(){
    return (
        <footer className="main-footer">
            App desenvolvido para a disciplina PWEB
            <div className="footer-icons">
                <a href="https://github.com/batbeto" target="_new">
                    <Gitlogo />
                </a>
                <a className="instalogo" href="https://www.instagram.com/adalberto_maia/" target="_new">
                    <Instalogo />
                </a>
            </div>
        </footer>
    )
}


export default Footer;