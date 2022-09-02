import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Announcement from "../announcement/announcement";
import ModalDialog from "../modal/modal";
import Grid from "../tables/Grid.jsx";

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            modalDisplay: "",
            announcementText: ""
        };
        
    }
    componentDidMount = () =>
    {
        document.querySelectorAll("#ui-dashboard > div > div > div.modal-body > div > button")[0].focus();
    }

    handleDisplay = (value) => 
    {
        this.setState({ modalDisplay: value });
    };

    handleDashboarButtonClick = () =>
    {
        this.setState({modalDisplay: "block"});
        setTimeout(() =>
        {
            if(document.getElementById("gridContainerModal").style.display === "block")
            {
                document.getElementById("grid-modal-title-close").focus();
            }
            else
            {
                document.querySelectorAll("#ui-dashboard > div > div > div.modal-body > div > button")[0].focus();
            }
        }, 100);
    }

    handleAnnounce = (announce) =>
    {
        this.setState({announcementText : announce});
    }

    render() {
        return (
            <main id="main">
                <Announcement announce={this.state.announcementText}/>
                <Container fluid>
                    <Row lg={12} className="d-flex justify-content-center">
                        <Col lg={4} md={4} sm={12}>
                            <ModalDialog
                                id="ui-dashboard"
                                display={"block"}
                                modalTitle={
                                    <h2
                                        id="dashboard-title"
                                        className="modal-title h4"
                                        style={{
                                            fontSize: "30px",
                                            marginLeft: "0px",
                                        }}
                                    >
                                        Welcome to User Management
                                    </h2>
                                }
                                showClose={false}
                                size="md"
                                titleId={"dashboard-title"}
                                modalBody={
                                    <div style={{ padding: "0rem 2rem 2rem" }}>
                                        <Button
                                            variant="outline-primary"
                                            onClick={this.handleDashboarButtonClick}
                                        >
                                            User Management
                                        </Button>
                                    </div>
                                }
                            />
                        </Col>
                    </Row>
                    <ModalDialog
                        changeDisplay={this.handleDisplay}
                        id="gridContainerModal"
                        display={this.state.modalDisplay}
                        modalBody={<Grid onUpdate={this.handleAnnounce}/>}
                        showClose={true}
                        size={"xl"}
                        titleId={"grid-modal-title"}
                        modalTitle={
                            <h2
                                className="modal-title h4"
                                id="grid-modal-title"
                            >
                                User Management
                            </h2>
                        }
                    />
                </Container>
            </main>
        );
    }
}
