import { createContext ,useCallback, useState } from 'react';
import t from 'prop-types';
import firebase from './firebase';

interface userAuth  {
    isUserLoggedIn: boolean;
    user: any;
  }


export const AuthContext = createContext<any>({});

function Auth({ children }:any){
    const [userInfo, setUserInfo] = useState<userAuth>({
        isUserLoggedIn: false,
        user: null
      })
          
    const logon_git = useCallback(() => {
        const providerGit = new firebase.auth.GithubAuthProvider();
        firebase.auth().signInWithRedirect(providerGit)
    }, [])
    
    const logon_google = useCallback(() =>{
        const providerGoogle = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(providerGoogle)
    }, [])

    const logout = useCallback(() => {
        firebase.auth().signOut().then(()=>{
           setUserInfo({isUserLoggedIn: false, user: null
          })
        })
      }, []) 
      
    return (
        <AuthContext.Provider value={{
            logon_git, 
            logon_google,
            logout,
            userInfo,
            setUserInfo
        }}>
            {children}
        </AuthContext.Provider>
    )
}

Auth.propTypes = {
    children: t.node.isRequired
}

export default Auth;