import React from 'react'
import Sidebar from '../components/Sidebar'
import { Row, Col, Container } from 'reactstrap'

export default function Profile() {
    return (
        <div>
            <Container>
                <Row>
                    <Col xl={3} lg={3} md={3}>
                        <Sidebar />
                    </Col>
                    <Col xl={9} lg={9} md={9}></Col>
                </Row>
            </Container>
        </div>
    );
}
