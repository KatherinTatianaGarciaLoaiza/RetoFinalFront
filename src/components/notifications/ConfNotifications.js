import React, { useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';
import swal from 'sweetalert';
import { Container, Row, Col } from 'react-bootstrap';
import SettingsIcon from '@material-ui/icons/Settings';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import EditIcon from '@material-ui/icons/Edit';
import AirplayIcon from '@material-ui/icons/Airplay';

import { auth } from '../logging/Logging';

import '../../styles/style.css'
import '../../styles/style2.css'
import { OrangeSwitch } from '../structure/DesignNaSi'

export default function ConfNotifications() {
    const [user] = useAuthState(auth);
    const [config, setConfig] = useState({});

    const [state, setState] = React.useState({
        FOKR: true,
        FKR: true,
        LKR: true,
		EOKR: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    // const getConfigNotification = () => {
    // 	if (user) {
    // 		fetch("http://localhost:8080/notifications/consultConfig/" + user.email, {
    // 			method: "GET",
    // 			headers: {
    // 				"Content-Type": "application/json",
    // 			},
    // 		})
    // 			.then((response) => response.json())
    // 			.then((response) => {
    // 				setConfig(response);
    // 				console.log(response) 
    // 			});
    // 	}
    // };
    const Swal = () => {
        return (
            swal("Correcto", "La configuración ha sido guardada", "success")
        )
    };
    // useEffect(() => {
    // 	getConfigNotification();
    // 	// eslint-disable-next-line
    // }, [])

    //FKR = Finish KR
    //FOKR = Finish OKR
    //LKR = Late KR
    //EOKR = Edit OKR

    return (
        <>
            <Container style={{boxShadow: "0px 0px 15px 0  #000"}}>
			<br/>
                <Row className="justify-content-md-center">
                    <strong>
                        <h1 className="title" style={{ color: "#000" }}>Configuración de Notificaciones</h1>
                    </strong>
                    <SettingsIcon style={{ color: "#F0950E" }} fontSize="large" />
                </Row>
                <Divider />
                <br />
                <Row>
                    <Col xs={9}></Col>
                    <Col ><AirplayIcon fontSize="large" /></Col>
                </Row>
                <Row>
                    <Col ><CheckBoxIcon fontSize="large" /></Col>
                    <Col xs={6}><p className="body">Generar notificaciones cuando se cumple el OKR</p></Col>
                    <Col >
                        <FormControlLabel
                            control={<OrangeSwitch checked={state.FOKR} onChange={handleChange} name="FOKR" />} />
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col ><LibraryAddCheckIcon fontSize="large" /></Col>
                    <Col xs={6}><p className="body">Generar notificaciones cuando se cumple el KR</p></Col>
                    <Col >
                        <FormControlLabel
                            control={<OrangeSwitch checked={state.FKR} onChange={handleChange} name="FKR" />} />
                    </Col>
                </Row>
                <Row>
                    <Col ><WatchLaterIcon fontSize="large" /></Col>
                    <Col xs={6}><p className="body">Generar notificaciones cuando un KR esta atrasado</p></Col>
                    <Col >
                        <FormControlLabel
                            control={<OrangeSwitch checked={state.LKR} onChange={handleChange} name="LKR" />} />
                    </Col>
                </Row>
                <Row>
                    <Col ><EditIcon fontSize="large" /></Col>
                    <Col xs={6}><p className="body">Generar notificaciones cada vez que se edita el OKR</p></Col>
                    <Col >
                        <FormControlLabel
                            control={<OrangeSwitch checked={state.EOKR} onChange={handleChange} name="EOKR" />} />
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <div className="titleNoti">
                        <span>
                            <Button size="medium" variant="contained" color="primary" onClick={Swal} >Confirmar</Button>
                        </span>
                    </div>
                </Row>
				<br/>
            </Container>
        </>
    )
}