import React, { useContext, useState, useEffect, useCallback } from "react";
import { Row, Col, Button, Form, FormGroup, Input } from "reactstrap";
import "../components/Login.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/authAction";
import { AuthContext } from "../contexts/authContext";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function Login() {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { checkLogin, setCheckLogin, setToken } = useContext(AuthContext);
    let history = useHistory();
    const auth = useSelector((state) => state.auth);

    useEffect(() => {});
    if (checkLogin) {
        history.push("/");
    }

    const handleLogin = () => {
        if (username === "" || password === "") {
            return;
        }
        const token = dispatch(login(username, password));
        token.then((data) => {
            setToken(data);
        }, (err) => {
            console.log(err);
        })
    };

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
                                        value={username}
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type='password'
                                        name='password'
                                        id='examplePassword'
                                        placeholder='Password'
                                        className='input-rounded my-3'
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </FormGroup>
                                <Button
                                    color='primary'
                                    className='w-100 my-3'
                                    onClick={() => handleLogin()}
                                    style={{ backgroundColor: "#2d88ff" }}>
                                    Đăng nhập
                                </Button>
                                <FormGroup>
                                    <a href='#'>Quên mật khẩu?</a>
                                </FormGroup>
                                <Button
                                    color='success'
                                    style={{ backgroundColor: "#42b72a" }}
                                    className='my-3 w-75'>
                                    Tạo tài khoản
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
            <ToastContainer
                position='bottom-left'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}
