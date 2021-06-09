import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { SignIn } from '../components/Logging'
import LandingImage from '../images/ImagenLanding.PNG';
import Logo from '../images/Logo.png';

export default function LandingPage() {
  return (
    <div>
      <Container>
        <Row style={{background:"#F0950E",color:"#ffffff"}} >
          <div className="title2">
            <h1 >SOFKA OKR</h1>
          </div>
        </Row>
        <Row>
          <Col>
            <h1 className="title" style={{color:"#000"}}>Nosotros</h1>
            <p className="body">Nuestro nombre Sofka viene de la unión de Software + Kaizen 
              (Filosofía de mejora continua, compromiso y disciplina).</p>
            <p className="body">Somos una compañía que desde sus inicios viene desarrollando 
              el talento tanto técnico como humano, para estar a la vanguardia
               de la industria tecnológica generando soluciones de alto impacto
                para nuestros clientes con los que siempre trabajamos en equipo.</p>
            <img src={Logo} style={{width:"80%",height:"30%"}}></img>
            <SignIn />
          </Col>
          <Col> <img src={LandingImage} ></img></Col>
        </Row>
      </Container>
    </div>
  )
}

