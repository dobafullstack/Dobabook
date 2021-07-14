import React from "react";
import { Row, Col, Button, Form, FormGroup, Input } from "reactstrap";
import "../components/Login.css";

export default function SignUp() {
    return (
        <div style={{ width: "100%", height: "100vh", position: "relative" }}>
            <div className='login-wrapper'>
                <Row>
                    <Col
                        xl={6}
                        className='d-flex flex-column justify-content-center'
                        style={{ maxWidth: "420px" }}>
                        <p className='title-login'>DobaBook</p>
                        <p className='description-login'>
                            DobaBook giúp bạn kết nối và chia sẻ với mọi người
                            trong cuộc sống của bạn.
                        </p>
                    </Col>
                    <Col xl={6}>
                        <div className='form-login'>
                            <Form>
                                <FormGroup>
                                    <Input
                                        type='email'
                                        name='email'
                                        id='exampleEmail'
                                        placeholder='Username'
                                        className='input-rounded my-3'
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type='email'
                                        name='email'
                                        id='exampleEmail'
                                        placeholder='Email'
                                        className='input-rounded my-3'
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type='password'
                                        name='password'
                                        id='examplePassword'
                                        placeholder='Password'
                                        className='input-rounded my-3'
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type='password'
                                        name='password'
                                        id='examplePassword'
                                        placeholder='Confirm password'
                                        className='input-rounded my-3'
                                    />
                                </FormGroup>
                                <Button
                                    color='primary'
                                    className='w-100 my-3'
                                    style={{ backgroundColor: "#2d88ff" }}>
                                    Đăng ký
                                </Button>
                                <FormGroup>
                                    <a href='#'>Quên mật khẩu?</a>
                                </FormGroup>
                                <Button
                                    color='success'
                                    style={{ backgroundColor: "#42b72a" }}
                                    className='my-3 w-75'>
                                    Đăng nhập bằng tài khoản đã có
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
