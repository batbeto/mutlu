import Orders from '../src/Orders'
import Home from '../src/pages/Home'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Routes(){
    return (
        <BrowserRouter>
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