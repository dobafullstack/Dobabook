import React, { useState, useEffect } from "react";
import "./Profile.css";
import { Row, Col } from "reactstrap";
import UpStatus from "./UpStatus";
import NewFeed from "./NewFeed";
import { useDispatch } from "react-redux";
import { getPostById } from "../redux/actions/postAction";

export default function Profile(props) {
    const { user } = props;
    const dispatch = useDispatch();

    const imgUser =
        "https://i.pinimg.com/564x/8d/8a/51/8d8a51b7a5d9fbf6c2185173e8b297bc.jpg";

    useEffect(() => {
        dispatch(getPostById(user._id));
    });

    return (
        <div>
            <div className='profile-header'>
                <div
                    className='background-header'
                    style={{
                        backgroundImage: `url('${user.background}')`,
                    }}>
                    <div
                        className='avatar-header'
                        style={{
                            backgroundImage: `url('${user.avatar}')`,
                        }}></div>
                </div>
            </div>
            <p className='username-header'>{user.name}</p>
            <p className='des-header'>THY</p>
            <Row>
                <Col xl={5} lg={4} md={4} sm={4} xm={4}>
                    <div className='group-lf'>
                        <Row>
                            <p className='lf-title'>List friends</p>
                            {user.friends.length === 0
                                ? null
                                : user.friends.map((friend) => (
                                      <Col xl={4}>
                                          <div className='lf-item'>
                                              <img
                                                  src={friend.user_id.avatar}
                                                  className='lf-img img-fluid'
                                              />
                                              <p className='fw-bold'>{friend.user_id.name}</p>
                                          </div>
                                      </Col>
                                  ))}
                        </Row>
                    </div>
                </Col>
                <Col xl={7} lg={8} md={8} sm={8} xm={8}>
                    <UpStatus className='up-status-profile' />
                    <NewFeed />
                </Col>
            </Row>
        </div>
    );
}
