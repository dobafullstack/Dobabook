import React from "react";
import { Col, Row, Container } from "reactstrap";
import Sidebar from "../components/Sidebar";
import UpStatus from "../components/UpStatus";
import NewFeed from '../components/NewFeed'
import SideFriend from '../components/SideFriend'

export default function Home() {
    return (
        <Container>
            <Row>
                <Col xl={3} lg={3} className='side-bar'>
                    <Sidebar />
                </Col>
                <Col xl={6} lg={6} md={12} className='content'>
                    <UpStatus />
                    <NewFeed />
                </Col>
                <Col xl={3} lg={3} className='sf'>
                    <SideFriend />
                </Col>
            </Row>
        </Container>
    );
}
