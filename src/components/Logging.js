import firebase from "./FirebaseInit.js";
import "firebase/firestore";
import "firebase/auth";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const auth = firebase.auth();

export function SignIn() {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    };
    return <button className="button right" onClick={signInWithGoogle}>Sign in with google</button>;
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