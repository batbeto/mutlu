import { ReactComponent as Logo } from '../../assets/location_brasil.svg';
import { ReactComponent as Google } from '../../assets/google.svg';
import { ReactComponent as Git } from '../../assets/github.svg';
import { Button, Grid } from '@material-ui/core';
import firebase from "firebase/app";
import "firebase/auth";
import Modal from '@material-ui/core/Modal';
import { PureComponent } from 'react';
import './styles.css';




var firebaseConfig = {
  apiKey: "AIzaSyCXmNEAwJ7_aX9Df8BQCO282H74giY6how",
  authDomain: "mutlu-am.firebaseapp.com",
  projectId: "mutlu-am",
  storageBucket: "mutlu-am.appspot.com",
  messagingSenderId: "953049174208",
  appId: "1:953049174208:web:eb76437690d1e7e5911d25",
  measurementId: "G-HMN1PQMHL4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class Login extends PureComponent{
  
  state = {
    isUserLoggedIn: false,
    user: null,
    isOpen: false
  }
  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user)=> { 
      console.log('user: ',user)           
      this.setState({
        isUserLoggedIn: !!user,
        user
      })
    })
  }
  logon_git() {
    const providerGit = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithRedirect(providerGit)
    
  }
  logon_google() {
    const providerGoogle = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(providerGoogle)
  }
  logout = () => {
    firebase.auth().signOut().then(()=>{
       console.log('deslogou')
      this.setState({isUserLoggedIn: false, user: null})
    })
  }
  
  render(){
    const {isUserLoggedIn, isOpen} = this.state;
    return( 
      <div className="container">
        {isUserLoggedIn && (
          <>
          <Button 
                  className = "btn_eventos" 
                  variant="contained" 
                  color="primary"
                  onClick={this.logout}
                  >SAIR</Button>
          </>
        )}
        {!isUserLoggedIn && (
          <>
          <Button 
                  className = "btn_eventos" 
                  variant="contained" 
                  color="primary"
                  onClick={this.openModal} 
                  >ENTRAR</Button>

          </>
        )}
        <Modal
              className="modalLogin"
              open={isOpen}
              onClose={this.closeModal}
              closeAfterTransition >
                  <div className="modal-body">
                      <div className="modal-content">
                      <Grid container spacing={3} direction="column" alignItems='center'>
                        <Grid item>
                          <form className="box-login">
                              <Logo width="30px" height="30px"/> <h1>LOGIN</h1>
                              <input type="text" placeholder="Email "/>
                              <input type="password" placeholder="Senha "/>
                              <div className="box-btn-login">
                                <input type="submit" value="ENTRAR"/>
                                <input type="submit" value="REGISTRO"/>
                              </div>
                              Esqueci meu <a href="">email</a> ou a <a href="">senha</a>? 
                          </form>
                        </Grid>
                        <Grid container spacing={1} justify="center" alignItems='center'>
                          <Grid item xs={12}>
                            <Button
                              className="btn-grid"
                              variant="contained" 
                              color="primary"
                              fullWidth
                              onClick={this.logon_google}
                            >
                              <Google width="20px" height="20px"  /><strong>oogle</strong>
                            </Button>
                          </Grid>
                          <Grid item xs={12}> 
                            <Button
                            className="btn-grid"
                            variant="contained" 
                            color="primary"
                            fullWidth
                            onClick={this.logon_git}
                            >
                              <Git width="17px" height="17px" /><strong>Github</strong>
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                      </div>
                  </div>
          </Modal>
        
      </div>
    )
}
}



export default Login;