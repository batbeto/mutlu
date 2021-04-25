import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import t from 'prop-types';
import { Redirect,Route, Switch } from "react-router-dom";
import { useContext, useEffect ,lazy, Suspense, useState} from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import firebase from './services/firebase';
import { AuthContext } from './services/auth'
const Navbar = lazy(() => import('./components/Navbar'));
const Home = lazy(() => import('./components/Home'));
const Events = lazy(() => import('./components/Events'));
const MapEvent = lazy(() => import('./components/forms/event'));
const Maps = lazy(()=> import('./components/Maps'));


function App() {
  const { userInfo, setUserInfo } = useContext(AuthContext)
  const [ checkUserIn, setCheckUserIn ] =useState(false)
  const { isUserLoggedIn } = userInfo;

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=> {  
      setUserInfo({
        isUserLoggedIn: !!user,
        user
      })
      setCheckUserIn(true)
    })
  }, [setUserInfo]);
  
  if (!checkUserIn) return <LinearProgress />

  const PrivateRoute = ({component: Component ,...rest}: any) => (
    <Route {...rest} render={props => (
      isUserLoggedIn ? (<Component {...props} />) : 
      (<Redirect to={{pathname: "/", state: {from: props.location} }}/>)
    )}/>  
  )  
  

  return (
    <Suspense fallback={<LinearProgress />}>
      <Navbar />  
      <Switch>
        <PrivateRoute path='/create/events' component ={MapEvent} />
        <PrivateRoute path='/events' component={Events}/>
        <PrivateRoute path='/maps' component={Maps} />
        <Route path='/' component={Home} exact />
      </Switch>
      <ToastContainer />
    </Suspense>
    
  )
}

App.propTypes = {
  location: t.object.isRequired
}

export default App;
