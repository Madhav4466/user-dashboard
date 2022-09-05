import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default class LeftPanel extends React.Component
{
    render()
    {
        return(
            <div class='container left-panel-container'>
                <Row lg={4} className="d-flex justify-content-center">
                    <Col lg={12} md={12} sm={12}></Col>
                    <Col lg={12} md={12} sm={12}></Col>
                    <Col lg={12} md={12} sm={12}></Col>
                </Row>
            </div>
        );
    }
}