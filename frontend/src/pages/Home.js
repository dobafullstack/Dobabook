import React, { useState, useEffect, useContext } from "react";
import { Col, Row, Container } from "reactstrap";
import Sidebar from "../components/Sidebar";
import UpStatus from "../components/UpStatus";
import NewFeed from "../components/NewFeed";
import SideFriend from "../components/SideFriend";
import {useDispatch} from 'react-redux'
import {getAllPost} from '../redux/actions/postAction'
import { Redirect } from "react-router-dom";
import {AuthContext} from '../contexts/authContext'
import axios from "axios";

export default function Home() {
    const dispatch = useDispatch();
    const { checkLogin } = useContext(AuthContext);

    const token = JSON.parse(localStorage.getItem("accessToken"));
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;

    console.log(checkLogin)

    useEffect(() => {
        dispatch(getAllPost());
    })
    return (
        <Container>
            <Row>
                <Col xl={3} lg={3} className='side-bar'>
                    <Sidebar />
                </Col>
                <Col
                    xl={6}
                    lg={6}
                    md={12}
                    className='content'
                    style={{ marginTop: "60px" }}>
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
