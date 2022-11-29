import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default class LeftPanel extends React.Component
{
    render()
    {
        return(
            <div class='left-panel-container'>
                <Row lg={4} className="vh-100">
                    <Col lg={2} md={2} sm={2}>
                    </Col>
                </Row>
            </div>
        );
    }
}