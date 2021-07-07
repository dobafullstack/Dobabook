import React from "react";
import { Col, Row } from "reactstrap";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className='wrapper'>
            <Row>
                <Col xl={3} lg={3} md={3} sm={3} xs={3} className='nav-brand'>
                    <Link to='/'>DobaBook</Link>
                </Col>
                <Col xl={3} lg={3} md={3} sm={3} xs={3} className='nav-search'>
                    <a href='#'>
                        <i class='fal fa-search'></i>
                    </a>
                    <input
                        className='input-search'
                        placeholder='Search for friend'
                    />
                </Col>
                <Col
                    xl={3}
                    lg={3}
                    md={3}
                    sm={3}
                    xs={3}
                    className='nav-notification'>
                    <a href='#'>
                        <i class='fas fa-user'></i>
                        <span className='badge-noti'>2</span>
                    </a>
                    <a href='#'>
                        <Link to='/message'>
                            <i class='fas fa-comment-alt-lines'></i>
                        </Link>
                        <span className='badge-noti'>2</span>
                    </a>
                    <a href='#'>
                        <i class='fas fa-bell'></i>
                        <span className='badge-noti'>2</span>
                    </a>
                </Col>
                <Col xl={3} lg={3} md={3} sm={3} xs={3} className='nav-avatar'>
                    <Link to='/profile'>
                        <img
                            className='rounded'
                            src='https://hook.finance/sites/default/files/user.png'
                            height='40'
                            alt='avatar'
                        />
                    </Link>
                </Col>
            </Row>
        </nav>
    );
}
