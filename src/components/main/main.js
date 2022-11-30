import React from "react";
import { Col, Container, Row} from "react-bootstrap";
import Announcement from "../announcement/announcement";
import LeftPanel from "../left-panel/left-panel";


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
        //document.querySelectorAll("#ui-dashboard > div > div > div.modal-body > div > button")[0].focus();
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
                <Container fluid>
                    <Announcement announce={this.state.announcementText}/>
                    <Row lg={12} className="content">
                        <Col lg={2}>
                            <LeftPanel></LeftPanel>
                        </Col>
                        <Col lg={10}>
                        </Col>
                    </Row>
                    
                </Container>
            </main>
        );
    }
}
