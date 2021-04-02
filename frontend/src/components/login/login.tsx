import { ReactComponent as Logo } from '../../assets/location_brasil.svg';
import { ReactComponent as Google } from '../../assets/google.svg';
import { ReactComponent as Git } from '../../assets/github.svg';
import { 
  Button, 
  Grid,
  IconButton,
  Menu,
  MenuItem
 } from '@material-ui/core';
import { Menu as MenuIcon} from '@material-ui/icons'
import Modal from '@material-ui/core/Modal';
import './styles.css';
import { useState, useContext } from 'react';
import { AuthContext } from '../../services/auth';






function Login() {
  const { logon_git, logon_google, logout, userInfo } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [anchor, setAnchor] = useState(null);
  
  const handleModalOpen = () =>{
    setIsOpen(true)
  }
  const handleModalClose = () =>{
    setIsOpen(false)
  }
  
  const handleMenuOpen = (e: any) =>{
    setAnchor(e.target)
  }

  const handleMenuClose = () =>{
    setAnchor(null)
  }

  return( 
      <div className="container">
          {!userInfo.isUserLoggedIn ?
            <Button 
              className = "btn_eventos" 
              variant="contained" 
              color="secondary"
              onClick={handleModalOpen} 
              >ENTRAR
            </Button>
            : 
              <IconButton 
                color='inherit' 
                onClick={handleMenuOpen}
                >
                <MenuIcon />
              </IconButton>
            } 
        <Menu
          open={Boolean(anchor)}
          onClose={handleMenuClose}
          anchorEl={anchor}>
            <MenuItem onClick={logout}>SAIR</MenuItem>
        </Menu>       
        <Modal
              className="modalLogin"
              open={isOpen}
              onClose={handleModalClose}
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
                              Esqueceu <a href="/">email</a> ou a <a href="/">senha</a>? 
                          </form>
                        </Grid>
                        <Grid container spacing={1} justify="center" alignItems='center'>
                          <Grid item xs={12}>
                            <Button
                              className="btn-grid"
                              variant="contained" 
                              color="primary"
                              fullWidth
                              onClick={logon_google}
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
                            onClick={logon_git}
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




export default Login;