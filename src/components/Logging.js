import firebase from "./FirebaseInit.js";
import "firebase/firestore";
import "firebase/auth";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import botonGoogle from '../images/BotonGoogle.png'
import { Redirect } from "react-router";
import swal from 'sweetalert';

export const auth = firebase.auth();
var IdleTime;
window.onload = ResetClock;
document.onkeypress = ResetClock;
document.onmousemove = ResetClock;

export function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return <img src={botonGoogle} alt='' onClick={signInWithGoogle} style={{ width: "50%", height: "30%",cursor: "pointer" }}>
  </img>;
}

export function SignOut() {
  return (
    auth.currentUser && (
      <ExitToAppIcon onClick={() => {
        localStorage.removeItem("uid");
        auth.signOut();
      }} style={{ color: 'white', cursor:"pointer" }} fontSize="large" />
    )
  );
}

export function Logout() {
  swal("¡¡¡Atencion!!!","Por exceder el tiempo de inactividad se ha cerrado la sesion","warning");
  auth.signOut();
  <Redirect to="/" />;
}

export function ResetClock() {
  if (auth.currentUser) {
    clearTimeout(IdleTime);
    IdleTime = setTimeout(Logout, 120000)
  }
}

