import './styles.css';
import { ReactComponent as Gitlogo } from '../../../Assets/github.svg';
import { ReactComponent as Instalogo } from '../../../Assets/instagram.svg';

function Footer(){
    return (
        <nav className="navbar fixed-bottom navbar-dark bg-dark">
            <div className="footer-icons">
                <a href="https://github.com/batbeto" target="_new">
                    <Gitlogo />
                </a>
                <a className="instalogo" href="https://www.instagram.com/adalberto_maia/" target="_new">
                    <Instalogo />
                </a>
                App desenvolvido para a disciplina PWEB
            </div>
        </nav>
    )
}


export default Footer;