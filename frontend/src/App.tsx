import './App.css';
import t, { InferProps } from 'prop-types';
import { Redirect ,Route, Switch } from "react-router-dom";
import { useContext, useEffect ,lazy, Suspense} from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import firebase from './services/firebase';
import { AuthContext } from './services/auth'
const Navbar = lazy(() => import('./components/Navbar'));
const Home = lazy(() => import('./components/Home'));
const Orders = lazy(() => import('./components/Orders'));


function App({ location }: InferProps<typeof App.propTypes>) {
  const { userInfo, setUserInfo} = useContext(AuthContext)

  const { isUserLoggedIn } = userInfo


  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=> {  
      console.log(user)       
      setUserInfo({
        isUserLoggedIn: !!user,
        user
      })
    })
  }, [setUserInfo]);

  

  return (
    <Suspense fallback={<LinearProgress />}>
      <Navbar />  
      <Switch>
        <Route path='/orders' component={Orders}/>
        <Route path='/' component={Home} exact />
      </Switch>
    </Suspense>
    
  )
}

App.propTypes = {
  location: t.object.isRequired
}

export default App;
