import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default class LeftPanel extends React.Component
{
    render()
    {
        return(
            <>
                <Row lg={12} className='left-panel-container vh-100'>
                    <Col lg={12} md={2} sm={2}>
                    </Col>
                </Row>
            </>
        );
    }
}