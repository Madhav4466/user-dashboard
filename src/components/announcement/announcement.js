import React from "react";

export default class Announcement extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            announcement: ""
        };
    }

    componentDidUpdate = (prevProps) =>
    {
        if(prevProps.announce !== this.props.announce)
        {
            this.setState({announcement: `Sorted ${this.props.announce}`});
            setTimeout(() =>
            {
                this.setState({announcement: ""});
            }, 1000);
        }
    }

    render()
    {
        return(
            <div id={"a11y-elements"}>
                <div id={"a11y-announcement"} aria-live="polite" aria-atomic="true" aria-relevant="additions">
                    {this.state.announcement}
                </div>
            </div>
        );
    }
}