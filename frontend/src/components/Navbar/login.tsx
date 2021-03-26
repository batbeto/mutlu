import { GoogleLogin } from 'react-google-login';


const clienteId = '819340522465-lumm5o8s86kpog2tmh8b933898ou6uq9.apps.googleusercontent.com';

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
                cookiePolicy={'single_host_origin'}
            />
       
    )
}
export default loginGoogle;