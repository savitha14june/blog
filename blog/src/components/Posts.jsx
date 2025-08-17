// Posts.js

import React from "react";
import Post1 from "./Post1";
import Post2 from "./Post2";
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const Posts = () => {
    return (
        <Container>
            <Row className="justify-content-between" style={{ backgroundColor: 'grey'}}>
                <Col md={8} className="mb-4 mt-4">
                    <Post1 />
                </Col>
                <Col md={4} className="mt-4 float-right">
                    <Card>
                        <Card.Body>
                            <Card.Title>My links to..</Card.Title>
                            <ul className="list-unstyled">
                                <li><a href="/chess">Chess</a></li>
                                <li><a href="#">Duolingo</a></li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={8} className="mb-4">
                    <Post2 />
                </Col>
            </Row>
        </Container>
    );
};

export default Posts;
