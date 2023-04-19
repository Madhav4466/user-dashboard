import React from "react";
import Header from "../components/header/header";
import Login from "./login";

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
    render() 
    {
        return(
            <>
                <Header/>
                {
                //this.state.showUser && <Main isClosed={this.modal} /*>
                }
                <Login/>
            </>
        );
    }
}
