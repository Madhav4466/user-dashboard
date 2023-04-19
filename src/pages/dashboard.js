import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Announcement from "../components/announcement/announcement";
import { ContentCard } from "../components/card/card";
import LeftPanel from "../components/left-panel/left-panel";

export default class Dashboard extends React.Component
{
    render()
    {
        return(
            <main id="main">
                <Container fluid>
                    <Announcement announce={this.state.announcementText}/>
                    <Row lg={12} className="content">
                        <Col lg={1}>
                            <LeftPanel></LeftPanel>
                        </Col>
                        <Col lg={10}>
                            <div className="dashboard-content">
                                <h1>Your Dashboard</h1>
                                <ContentCard id="card1" cardTitle="Hello" cardText="Hi" cardContent="Hi"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
        );
    }
}