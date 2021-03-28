import { ReactComponent as Logo } from '../../assets/location_brasil.svg';
import { ReactComponent as Google } from '../../assets/google.svg';
import { ReactComponent as Git } from '../../assets/github.svg';
import { Button, Grid } from '@material-ui/core';
import firebase from "firebase/app";
import "firebase/auth";


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

export default function Login (){
  const providerGit = new firebase.auth.GithubAuthProvider();
  const providerGoogle = new firebase.auth.GoogleAuthProvider();
  return(
    <div className="grid-container">
      <Grid container spacing={3} direction="column" alignItems='center'>
        <Grid item>
          <Logo width="40px" height="40px"/> <strong>Login</strong>
        </Grid>
        <Grid container spacing={1} justify="center" alignItems='center'>
          <Grid item xs={12}>
            <Button
              className="btn-grid"
              variant="contained" 
              color="secondary"
              fullWidth
              onClick={()=> firebase.auth().signInWithRedirect(providerGoogle)}
            >
              <Google width="20px" height="20px"  /><strong>oogle</strong>
            </Button>
          </Grid>
          <Grid item xs={12}> 
            <Button
            className="btn-grid"
            variant="contained" 
            color="secondary"
            fullWidth
            onClick={()=> firebase.auth().signInWithRedirect(providerGit)}
            >
              <Git width="17px" height="17px" /><strong>Github</strong>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}