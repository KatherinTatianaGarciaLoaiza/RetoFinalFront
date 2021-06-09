import React, {useState} from 'react';
import {Modal} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Logo from '../images/Logo.png';
import { auth } from './Logging';
import { nombre } from './Avatar'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) =>({
    modal:{
        position:'absolute', 
        width: 400,
        backgroundColor:'white',
        border: '2px solid #F0950E', 
        boxShadow: theme.shadows[5],
        padding: '16px 32px 24px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    text:{
        width: '100%',
        fontfamily: 'Lato',
        fontweight: 'bold'
    }
}))

export function WelcomeMessage(state){

    const styles = useStyles();

    const [modal, setModal] = useState(state);

    const openAndClose = () =>{
        setModal(!modal);
    }

    const body =(
        <div className = {styles.modal}>
            <div align = "center">
            <img src={Logo} style={{width:"80%",height:"30%"}}></img>
            </div>
            <h2 className = {styles.text}>!!Te da la bienvenida {nombre(auth.currentUser.displayName)}!!</h2>
            <br />
            <h3 className = {styles.text}>Estamos felices de tenerte de nuevo con notros. Esperamos poder
                 aprender mucho de tus aportes.</h3>
            <br /><br />
            <div align = "center" >
            <Link to="/Home" variant="contained" style={{ background: "#F0950E", color: "#ffffff" }} 
            onClick = {() => openAndClose()}><label className="title">Aceptar</label></Link>
            </div>
        </div>
    )

    return(
        <div>           
            <Modal open = {modal} onClose = {openAndClose}>
            {body}
            </Modal>
        </div>
    )
} 