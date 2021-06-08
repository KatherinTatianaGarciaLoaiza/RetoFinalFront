import firebase from "./FirebaseInit.js";
import "firebase/firestore";
import "firebase/auth";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import botonGoogle from '../images/BotonGoogle.png'

export const auth = firebase.auth();

export function SignIn() {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    };
    return <img src={botonGoogle} onClick={signInWithGoogle} style={{width:"50%",height:"30%"}}>
    </img>;
  }
  
  export function SignOut() {
    return (
      auth.currentUser && (
        <ExitToAppIcon onClick={() => {
            localStorage.removeItem("uid");
            auth.signOut();
          }} style={{ color: 'white' }} fontSize="large" />
      )
    );
  }