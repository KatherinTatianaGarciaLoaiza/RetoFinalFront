import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import NavbarSofKa from "../components/Navbar";
import ClippedDrawer from "../components/Sidebar";

const HomePage = () => (
        <Container>
            <Row>
                <Col md={12}>
                <NavbarSofKa />
                </Col>
                
            </Row>
            <Row>
                <ClippedDrawer />
            </Row>
        </Container>
)
export default HomePage