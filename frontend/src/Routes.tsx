import { BrowserRouter, Route, Switch } from "react-router-dom";
import { lazy, Suspense} from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
const Navbar = lazy(() => import('./components/Navbar'));
const Home = lazy(() => import('./components/Home'));
const Orders = lazy(() => import('./components/Orders'));


function Routes(){
    return (
        <BrowserRouter>
        <Suspense fallback={<LinearProgress />}>
        <Navbar />  
            <Switch>
                <Route path='/orders' component={Orders}/>
                <Route path='/' component={Home} />
            </Switch>
        </Suspense>
        </BrowserRouter>
    )
}


export default Routes;