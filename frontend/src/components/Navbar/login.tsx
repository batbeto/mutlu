import { GoogleLogin } from 'react-google-login';


const clienteId = 'YOUR_CLIENT_ID.apps.googleusercontent.com';

function loginGoogle(){
    const onSucess = (res :any) => {
        console.log('[Login Sucess] currentUser:', res.profileObj)
    }
    
    const onFailure = (res :any) => {
        console.log('[Login Failed] res:', res)
    }
    
    return(      
            <GoogleLogin
                clientId={clienteId}
                buttonText="Login"
                onSuccess={onSucess}
                onFailure={onFailure}
            />
       
    )
}
export default loginGoogle;