import App from './App';
import { Route ,BrowserRouter } from "react-router-dom";
import AuthProvider from './services/auth'


function Routes(){
    return (
        <AuthProvider>
            <BrowserRouter>
                <Route component={App} />    
            </BrowserRouter>
        </AuthProvider>
    )
}


export default Routes;