import './App.css';
import t from 'prop-types';
import { Redirect,Route, Switch } from "react-router-dom";
import { useContext, useEffect ,lazy, Suspense, useState} from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import firebase from './services/firebase';
import { AuthContext } from './services/auth'
const Navbar = lazy(() => import('./components/Navbar'));
const Home = lazy(() => import('./components/Home'));
const Orders = lazy(() => import('./components/Orders'));


function App({ location }:any) {
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

  if (isUserLoggedIn && location.pathname !== '/orders') return <Redirect to='/orders'/>

  if (!isUserLoggedIn && location.pathname !== '/') return <Redirect to='/'/>

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
