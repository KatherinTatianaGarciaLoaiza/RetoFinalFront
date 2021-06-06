import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { SignIn } from '../App'
import LandingImage from '../images/ImagenLanding.PNG';

export default function LandingPage() {
  return (
    <div>
      <Container>
        <Row style={{background:"#F0950E",color:"#ffffff"}}>
          <h1 >SOFKA OKR</h1>
        </Row>
        <Row>
          <Col>
            <h1>Nosotros</h1>
            <p>Nuestro nombre Sofka viene de la unión de Software + Kaizen 
              (Filosofía de mejora continua, compromiso y disciplina).</p>
            <p>Somos una compañía que desde sus inicios viene desarrollando 
              el talento tanto técnico como humano, para estar a la vanguardia
               de la industria tecnológica generando soluciones de alto impacto
                para nuestros clientes con los que siempre trabajamos en equipo.</p>
          </Col>
          <Col><SignIn /> <img src={LandingImage}></img></Col>
        </Row>
      </Container>
    </div>
  )
}

