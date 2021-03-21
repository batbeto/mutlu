import Navbar from './components/Navbar';
import Home from './components/Home';
import Orders from './components/Orders'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Routes(){
    return (
        <BrowserRouter>
        <Navbar />     
        <Switch>
            <Route path="/orders">
                <Orders />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
        </BrowserRouter>
    )
}


export default Routes;