import Navbar from '../src/pages/Navbar';
import Users from '../src/pages/Users';
import Home from '../src/pages/Home';
import Footer from '../src/pages/footer';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Routes(){
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <Users />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}


export default Routes;