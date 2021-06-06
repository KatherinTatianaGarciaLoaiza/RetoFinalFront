import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { SignIn, SignOut } from '../App'

export default function LandingPage() {
    return (
        <div>
          <Container>
            <Row>
              <p>Login</p>
              <SignIn/>
              <SignOut/>
            </Row>
          </Container>
        </div>
    )
}

