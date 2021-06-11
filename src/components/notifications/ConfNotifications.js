import React, { useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';
import {Container, Row, Col} from 'react-bootstrap';
import SettingsIcon from '@material-ui/icons/Settings';

import {auth} from '../logging/Logging';

import '../../styles/style.css'

export default function ConfNotifications(){    
    const [user] = useAuthState(auth);
    const [config, setConfig] = useState({});



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
	return (
		<>
        <Container style={{background:"#e5c5be"}}>
            <Row className="justify-content-md-center">
                <h3>Configuración de Notificaciones</h3>
                <SettingsIcon style={{ color: "#F0950E" }} fontSize="large"/>
            </Row>
            <Row>
                <Row>
                    <p>Generar notificaciones cuando se cumple el KR</p>
                </Row>
                <Row>
                    <p>Generar notificaciones cuando se cumple el OKR</p>
                </Row>
                <Row>
                    <p>Generar notificaciones cuando un KR esta atrasado</p>
                </Row>
                <Row>
                    <p>Generar notificaciones cada vez que se edita el OKR</p>
                </Row>
            </Row>
        </Container>

		<div className="containerConfigNotification">
			<div className="optionsNotifications">
				<div className="option-icons-mail-notification">

					<div className="email">
						<span ><i style={{ fontSize: "40px" }} className="far fa-envelope"></i></span>
					</div>
					<div className="int">
						<span><i style={{ fontSize: "40px" }} className="fas fa-desktop"></i></span>
					</div>

				</div>
				<div className="option-item">
					<span>
						<i className="fas fa-trophy"></i>
					</span>

					<p>Generar notificaciones cuando se cumple el OKR</p>

					<div className="active-options">
						<div className="email">
							<label className="switch">
								<input type="checkbox" id="mailFullOkr" onClick={() => { setConfig({ ...config, mailCompletedOkr: !config.mailCompletedOkr }) }} checked={config.mailCompletedOkr} />
								<span className="slider round"></span>
							</label>
						</div>
						<label className="switch">
							<input type="checkbox" id="notiFullOkr" onClick={() => { setConfig({ ...config, notificationCompletedOkr: !config.notificationCompletedOkr }) }} checked={config.notificationCompletedOkr} />
							<span className="slider round"></span>
						</label>
					</div>
				</div>
				<div className="option-item">
					<span>
						<i className="far fa-edit"></i>
					</span>

					<p >Generar notificaciones cada vez que se cumpla un KR</p>

					<div className="active-options">
						<div className="email">
							<label className="switch">
								<input type="checkbox" id="mailFullKr" onClick={() => { setConfig({ ...config, mailCompletedKr: !config.mailCompletedKr }) }} checked={config.mailCompletedKr} />
								<span className="slider round"></span>
							</label>
						</div>
						<label className="switch">
							<input type="checkbox" id="notiFullKr" onClick={() => { setConfig({ ...config, notificationCompletedKr: !config.notificationCompletedKr }) }} checked={config.notificationCompletedKr} />
							<span className="slider round"></span>
						</label>
					</div>
				</div>
			</div>
			<div className="titleNoti">
				<span>
					<Button size="medium" variant="contained" color="primary" onClick={Swal} >Confirmar</Button>
				</span>
			</div>
		</div>
		</>
	)
    }