import React, { useState, useEffect} from 'react'
import Sidebar from '../components/Sidebar'
import { Row, Col, Container } from 'reactstrap'
import ProfileComponent from '../components/Profile'
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux';
import {getUser} from '../redux/actions/authAction'


export default function Profile() {
    const profile = 'PROFILE'
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser(JSON.parse(localStorage.getItem("user"))._id));
    }, [profile]);
    return (
        <div>
            <Container>
                <Row>
                    <Col xl={3} lg={3} md={3} className="side-bar">
                        <Sidebar />
                    </Col>
                    <Col xl={9} lg={9} md={12} xs={12}>
                        <ProfileComponent user={user}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
