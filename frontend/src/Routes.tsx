import Navbar from '../src/pages/Navbar';
import Home from '../src/pages/Home';
import Orders from '../src/pages/Orders'
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