import React from "react";
import { Container, Row} from "react-bootstrap";

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
                    <Row lg={12} className="content">
                        
                    </Row>
                </Container>
            </main>
        );
    }
}
