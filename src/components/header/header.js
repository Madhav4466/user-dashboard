import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default class Header extends React.Component
{
    render()
    {
        return(
            <header id="header">
                <Container fluid>
                    <Row lg={12}>
                        <Col lg={12} md={12} sm={12}>
                            {/*add your header content here*/}
                        </Col>
                    </Row>
                </Container>
            </header>
        );
    }
}