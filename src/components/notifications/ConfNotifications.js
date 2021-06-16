import React, { useState, useEffect } from 'react';
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
import axios from 'axios';

import { auth } from '../logging/Logging';
import { URI } from '../../actions/okrActions';

import '../../styles/style.css'
import '../../styles/style2.css'
import { OrangeSwitch } from '../structure/DesignNaSi'

export default function ConfNotifications() {
	const [user] = useAuthState(auth);

	const [state, setState] = useState({
        id: "",
		userId: "",
		oKRFinishScreen: "",
		kRFinishScreen: "",
		kRLateScreen: "",
		oKREditScreen:"",
	});

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};



	const getOrPostConfigNotification = () => {
		axios.get(`http://localhost:8080/GetConfigNotifications/${user.email}`)
					/* axios.get(`${URI}/GetConfigNotifications/${user.email}`) */
					.then(res => setState(res.data))
	};

	const putConfigNotification = () => {
		/* axios.put(`${URI}/UpdateConfigNotifications`,{"id":state.id,
		"userId":user.email,
		"oKRFinishScreen":state.oKRFinishScreen,
		"kRFinishScreen":state.kRFinishScreen,
		"kRLateScreen":state.kRLateScreen,
		"oKREditScreen":state.oKREditScreen}) */
			axios.put("http://localhost:8080/UpdateConfigNotifications",{"id":state.id,
            "userId":user.email,
            "oKRFinishScreen":state.oKRFinishScreen,
            "kRFinishScreen":state.kRFinishScreen,
            "kRLateScreen":state.kRLateScreen,
            "oKREditScreen":state.oKREditScreen})
				console.log(state);
	};

	const Swal = () => {
		swal("Correcto", "La configuración ha sido guardada", "success");
        putConfigNotification();
	};
	useEffect(() => {
		getOrPostConfigNotification();
	}, [])

	return (
		<>
			<Container style={{ boxShadow: "0px 0px 15px 0  #000" }}>
				<br />
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
							control={<OrangeSwitch checked={state.oKRFinishScreen} onChange={handleChange} name="oKRFinishScreen" />} />
					</Col>
				</Row>
				<Row className="justify-content-md-center">
					<Col ><LibraryAddCheckIcon fontSize="large" /></Col>
					<Col xs={6}><p className="body">Generar notificaciones cuando se cumple el KR</p></Col>
					<Col >
						<FormControlLabel
							control={<OrangeSwitch checked={state.kRFinishScreen} onChange={handleChange} name="kRFinishScreen" />} />
					</Col>
				</Row>
				<Row>
					<Col ><WatchLaterIcon fontSize="large" /></Col>
					<Col xs={6}><p className="body">Generar notificaciones cuando un KR esta atrasado</p></Col>
					<Col >
						<FormControlLabel
							control={<OrangeSwitch checked={state.kRLateScreen} onChange={handleChange} name="kRLateScreen" />} />
					</Col>
				</Row>
				<Row>
					<Col ><EditIcon fontSize="large" /></Col>
					<Col xs={6}><p className="body">Generar notificaciones cada vez que se edita el OKR</p></Col>
					<Col >
						<FormControlLabel
							control={<OrangeSwitch checked={state.oKREditScreen} onChange={handleChange} name="oKREditScreen" />} />
					</Col>
				</Row>
				<Row className="justify-content-md-center">
					<div className="titleNoti">
						<span>
							<Button size="medium" variant="contained" color="primary" onClick={Swal} >Confirmar</Button>
						</span>
					</div>
				</Row>
				<br />
			</Container>
		</>
	)
}