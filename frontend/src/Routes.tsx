import Navbar from '../src/pages/Navbar';
import Users from '../src/pages/Users';
import Home from '../src/pages/Home';
import Footer from '../src/pages/footer';
import Orders from '../src/pages/Orders'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Routes(){
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/login">
                    <Users />
                </Route>
                <Route path="/orders">
                    <Orders />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
               
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}


export default Routes;