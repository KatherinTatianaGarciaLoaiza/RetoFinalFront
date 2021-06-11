import React, { useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import Button from '@material-ui/core/Button';
import { Divider, Toolbar } from '@material-ui/core';
import swal from 'sweetalert';
import { Container, Form, Row, Col } from 'react-bootstrap';
import SettingsIcon from '@material-ui/icons/Settings';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import EditIcon from '@material-ui/icons/Edit';

import { auth } from '../logging/Logging';

import '../../styles/style.css'
import { PurpleSwitch } from '../structure/DesignNaSi'

export default function ConfNotifications() {
	const [user] = useAuthState(auth);
	const [config, setConfig] = useState({});

	const [state, setState] = React.useState({
		checkedA: true,
		checkedB: true,
		checkedC: true,
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
			<Container >
				<Row className="justify-content-md-center">
					<h3>Configuración de Notificaciones</h3>
					<SettingsIcon style={{ color: "#F0950E" }} fontSize="large" />
				</Row>
				<Toolbar />
				<Divider />
				<Toolbar />
				<Row>
					<Col xs={3}><CheckBoxIcon fontSize="large" /></Col>
					<Col xs={6}><p>Generar notificaciones cuando se cumple el OKR</p></Col>
					<Col xs={3}>
						<FormControlLabel
							control={<PurpleSwitch checked={state.FOKR} onChange={handleChange} name="FOKR" />} />
					</Col>
					{/* <Col>
						<FormControlLabel
							control={<PurpleSwitch checked={state.checkedA} onChange={handleChange} name="checkedA" />} />
					</Col> */}
				</Row>
				<Row className="justify-content-md-center">
					<Col xs={3}><LibraryAddCheckIcon fontSize="large" /></Col>
					<Col xs={6}><p>Generar notificaciones cuando se cumple el KR</p></Col>
					<Col xs={3}>
						<FormControlLabel
							control={<PurpleSwitch checked={state.FKR} onChange={handleChange} name="FKR" />} />
					</Col>
					{/* <Col>
						<FormControlLabel
							control={<PurpleSwitch checked={state.checkedA} onChange={handleChange} name="checkedA" />} />
					</Col> */}
				</Row>
				<Row>
					<Col xs={3}><WatchLaterIcon fontSize="large" /></Col>
					<Col xs={6}><p>Generar notificaciones cuando un KR esta atrasado</p></Col>
					<Col xs={3}>
						<FormControlLabel
							control={<PurpleSwitch checked={state.LKR} onChange={handleChange} name="LKR" />} />
					</Col>
					{/* <Col><FormControlLabel
						control={<PurpleSwitch checked={state.checkedA} onChange={handleChange} name="checkedA" />} />
					</Col> */}
				</Row>
				<Row>
					<Col xs={3}><EditIcon fontSize="large" /></Col>
					<Col xs={6}><p>Generar notificaciones cada vez que se edita el OKR</p></Col>
					<Col xs={3}><FormControlLabel
						control={<PurpleSwitch checked={state.EOKR} onChange={handleChange} name="EOKR" />} />
					</Col>
					{/* <Col><FormControlLabel
						control={<PurpleSwitch checked={state.checkedA} onChange={handleChange} name="checkedA" />} />
						</Col> */}
				</Row>
				<Row className="justify-content-md-center">
					<div className="titleNoti">
						<span>
							<Button size="medium" variant="contained" color="primary" onClick={Swal} >Confirmar</Button>
						</span>
					</div>
				</Row>
			</Container>

		</>
	)
}