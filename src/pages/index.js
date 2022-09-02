import React from "react";
import Main from "../components/main/main";

export default class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showUser: true,
        };
        this.modal = this.modal.bind(this);
    }

    modal() {
        this.setState({ showUser: !this.state.modal });
    }
    render() {
        return <>{this.state.showUser && <Main isClosed={this.modal} />}</>;
    }
}
